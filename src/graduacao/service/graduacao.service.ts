import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Graduacao } from '../entities/graduacao.entity';

@Injectable()
export class GraduacaoService {
  constructor(
    @InjectRepository(Graduacao)
    private graduacaoRepository: Repository<Graduacao>

  ) { }

  async findAll(): Promise<Graduacao[]> {
    return await this.graduacaoRepository.find(
      {
        relations: {
          usuario: true
        }
      }
    );
  }

  async findOneById(id: number): Promise<Graduacao> {

    let graduacao = await this.graduacaoRepository.findOne({
      where: {
        id
      },
      relations: {
        usuario: true
      }
    });

    if (!graduacao)
      throw new HttpException('Graduacao não encontrada!', HttpStatus.NOT_FOUND);

    return graduacao;

  }

  async create(graduacao: Graduacao): Promise<Graduacao> {
    return await this.graduacaoRepository.save(graduacao);
  }

  async update(graduacao: Graduacao): Promise<Graduacao> {
    return await this.graduacaoRepository.save(graduacao);
  }

  async delete(id: number): Promise<DeleteResult> {

    let graduacao = await this.findOneById(id);

    if(!graduacao)
     throw new HttpException('Graduacao não encontrada!', HttpStatus. NOT_FOUND)

    return await this.graduacaoRepository.delete(id);

  }

}

