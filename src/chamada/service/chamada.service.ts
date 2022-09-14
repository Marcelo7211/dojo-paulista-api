import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Usuario from 'src/usuario/entities/usuario.entity';
import { DeleteResult, Repository } from 'typeorm';
import { Chamada } from '../entities/chamada.entity';

@Injectable()
export class ChamadaService {
  constructor(
    @InjectRepository(Chamada)
    private chamadaRepository: Repository<Chamada>

  ) { }

  async findAll(): Promise<Chamada[]> {
    return await this.chamadaRepository.find(
      {
        relations: {
          turma: true
        }
      }
    );
  }

  async findAllByTurmaIdAndData(idTurma: number, data: Date): Promise<Chamada[]> {
    return await this.chamadaRepository.find(
      {
        where: {
          data: data,
          turma: {
            id: idTurma
          }
        },
        relations: {
          usuario: true
        }
      }
    );
  }


  async findOneById(id: number): Promise<Chamada> {

    let chamada = await this.chamadaRepository.findOne({
      where: {
        id
      },
      relations: {
        turma: true
      }
    });

    if (!chamada)
      throw new HttpException('Chamada não encontrada!', HttpStatus.NOT_FOUND);

    return chamada;

  }

  async chageStatus(chamada: Chamada): Promise<Chamada> {
    let chamadaExists = await this.findOneByDataAndIdUser(chamada.usuario.id, chamada.data);

    if (!chamadaExists)
      throw new HttpException('Chamada não encontrada!', HttpStatus.NOT_FOUND);

    chamadaExists.isPresente = chamada.isPresente;

    return await this.update(chamadaExists)
  }

  async findOneByDataAndIdUser(id: number, data: Date): Promise<Chamada> {

    let chamada = await this.chamadaRepository.findOne({
      where: {
        usuario: {
          id: id
        },
        data: data
      },
      relations: {
        usuario: true,
      }
    });

    if (!chamada)
      throw new HttpException('Chamada não encontrada!', HttpStatus.NOT_FOUND);

    return chamada;

  }

  async findOneByTurmaId(turmaId: number): Promise<Chamada[]> {
    let chamada = await this.chamadaRepository.find({
      where: {
        turma: {
          id: turmaId
        }
      },
    });

    if (!chamada)
      throw new HttpException('Chamada não encontrada!', HttpStatus.NOT_FOUND);

    return chamada;

  }

  async create(chamada: Chamada): Promise<Chamada> {
    return await this.chamadaRepository.save(chamada);
  }

  async createAll(chamada: Chamada[]): Promise<Chamada[]> {
    let chamadaList: Chamada[] = [];

    chamada.map(async (c) => {
      chamadaList.push(await this.chamadaRepository.save(c))
    })

    console.log(chamadaList)
    return chamadaList;
  }

  async update(chamada: Chamada): Promise<Chamada> {
    return await this.chamadaRepository.save(chamada);
  }

  async delete(id: number): Promise<DeleteResult> {

    let chamada = await this.findOneById(id);

    if (!chamada)
      throw new HttpException('Chamada não encontrada!', HttpStatus.NOT_FOUND)

    return await this.chamadaRepository.delete(id);

  }

}

