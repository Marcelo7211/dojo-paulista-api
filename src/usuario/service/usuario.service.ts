import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bcrypt } from 'src/auth/bcrypt/bcrypt';
import { DeleteResult, Repository } from 'typeorm';
import Usuario from '../entities/usuario.entity';


@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private bcrypt: Bcrypt
  ) { }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find(
      {
        relations: {
          turma: true,
          chamada: true,
          graduacao: true
        }
      }
    );
  }

  async findOneById(id: number): Promise<Usuario> {

    let usuario = await this.usuarioRepository.findOne({
      where: {
        id
      },
      relations: {
        turma: true,
        chamada: true,
        graduacao: true
      }
    });

    if (!usuario)
      throw new HttpException('Usuario não encontrada!', HttpStatus.NOT_FOUND);

    return usuario;
  }

  async findOneByEmail(email: string): Promise<Usuario> {

    let usuario = await this.usuarioRepository.findOne({
      where: {
        email
      },
      relations: {
        turma: true,
      }
    });

    if (!usuario)
      throw new HttpException('Usuario não encontrada!', HttpStatus.NOT_FOUND);

    return usuario;
  }

  async create(user: Usuario): Promise<Usuario> {
    const usuarioBusca = await this.findOneByUserEmail(user.email);

    if (!usuarioBusca) {
      user.senha = await this.bcrypt.gerarHash(user.senha)
      return await this.usuarioRepository.save(user);
    }

    throw new HttpException("O Usuario ja existe!", HttpStatus.BAD_REQUEST);
  }

  async update(user: Usuario): Promise<Usuario> {

    let usuarioUpdate: Usuario = await this.findOneById(user.id);
    const usuarioBusca = await this.findOneByUserEmail(user.email);

    if (usuarioUpdate === undefined)
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

    if (usuarioBusca && usuarioBusca.id !== user.id)
      throw new HttpException('Usuário (e-mail) já Cadastrado, digite outro!', HttpStatus.BAD_REQUEST);

    user.senha = await this.bcrypt.gerarHash(user.senha)
    return await this.usuarioRepository.save(user);
  }

  async delete(id: number): Promise<DeleteResult> {

    let chamada = await this.findOneById(id);

    if (!chamada)
      throw new HttpException('Usuario não encontrada!', HttpStatus.NOT_FOUND)

    return await this.usuarioRepository.delete(id);
  }

  async findOneByUserEmail(email: string): Promise<Usuario | undefined> {
    return await this.usuarioRepository.findOne({
      where: {
        email: email
      }
    })
  }

}
