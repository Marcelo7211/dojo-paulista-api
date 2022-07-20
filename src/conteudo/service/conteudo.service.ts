import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Conteudo } from '../entities/conteudo.entity';

@Injectable()
export class ConteudoService {
  constructor(
    @InjectRepository(Conteudo)
    private conteudoRepository: Repository<Conteudo>

  ) { }

  async findAll(): Promise<Conteudo[]> {
    return await this.conteudoRepository.find();
  }

  async findOneById(id: number): Promise<Conteudo> {

    let conteudo = await this.conteudoRepository.findOne({
      where: {
        id
      }
    });

    if (!conteudo)
      throw new HttpException('Conteudo não encontrada!', HttpStatus.NOT_FOUND);

    return conteudo;

  }

  async create(conteudo: Conteudo): Promise<Conteudo> {
    return await this.conteudoRepository.save(conteudo);
  }

  async update(conteudo: Conteudo): Promise<Conteudo> {
    return await this.conteudoRepository.save(conteudo);
  }

  async delete(id: number): Promise<DeleteResult> {

    let conteudo = await this.findOneById(id);

    if(!conteudo)
     throw new HttpException('Conteudo não encontrada!', HttpStatus. NOT_FOUND)

    return await this.conteudoRepository.delete(id);
  }

}