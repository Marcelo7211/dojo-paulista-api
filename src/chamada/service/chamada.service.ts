import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  async create(chamada: Chamada): Promise<Chamada> {
    return await this.chamadaRepository.save(chamada);
  }

  async update(chamada: Chamada): Promise<Chamada> {
    return await this.chamadaRepository.save(chamada);
  }

  async delete(id: number): Promise<DeleteResult> {

    let chamada = await this.findOneById(id);

    if(!chamada)
     throw new HttpException('Chamada não encontrada!', HttpStatus. NOT_FOUND)

    return await this.chamadaRepository.delete(id);

  }

}

