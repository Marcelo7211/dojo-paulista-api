import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Mensalidade } from '../entities/mensalidade.entity';

@Injectable()
export class MensalidadeService {
  constructor(
    @InjectRepository(Mensalidade)
    private mensalidadeRepository: Repository<Mensalidade>

  ) { }

  async findAll(): Promise<Mensalidade[]> {
    return await this.mensalidadeRepository.find(
      {
        relations: {
          aluno: true,
          recebidoPor: true
        }
      }
    );
  }

  async findOneById(id: number): Promise<Mensalidade> {

    let mensalidade = await this.mensalidadeRepository.findOne({
      where: {
        id
      },
      relations: {
        aluno: true,
        recebidoPor: true
      }
    });

    if (!mensalidade)
      throw new HttpException('Mensalidade não encontrada!', HttpStatus.NOT_FOUND);

    return mensalidade;

  }

  async create(mensalidade: Mensalidade): Promise<Mensalidade> {
    return await this.mensalidadeRepository.save(mensalidade);
  }

  async update(mensalidade: Mensalidade): Promise<Mensalidade> {
    return await this.mensalidadeRepository.save(mensalidade);
  }

  async delete(id: number): Promise<DeleteResult> {

    let mensalidade = await this.findOneById(id);

    if(!mensalidade)
     throw new HttpException('Mensalidade não encontrada!', HttpStatus. NOT_FOUND)

    return await this.mensalidadeRepository.delete(id);

  }

}

