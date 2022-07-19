import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Turma } from '../entities/turma.entity';

@Injectable()
export class TurmaService {
  constructor(
    @InjectRepository(Turma)
    private turmaRepository: Repository<Turma>

  ) { }

  async findAll(): Promise<Turma[]> {
    return await this.turmaRepository.find(
      {
        relations: {
          usuario: true
        }
      }
    );
  }

  async findOneById(id: number): Promise<Turma> {

    let chamada = await this.turmaRepository.findOne({
      where: {
        id
      },
      relations: {
        usuario: true
      }
    });

    if (!chamada)
      throw new HttpException('Turma não encontrada!', HttpStatus.NOT_FOUND);

    return chamada;

  }

  async create(chamada: Turma): Promise<Turma> {
    return await this.turmaRepository.save(chamada);
  }

  async update(chamada: Turma): Promise<Turma> {
    return await this.turmaRepository.save(chamada);
  }

  async delete(id: number): Promise<DeleteResult> {

    let chamada = await this.findOneById(id);

    if(!chamada)
     throw new HttpException('Turma não encontrada!', HttpStatus. NOT_FOUND)

    return await this.turmaRepository.delete(id);

  }

}