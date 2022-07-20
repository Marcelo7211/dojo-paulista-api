import { Injectable } from '@nestjs/common';
import { Financeiro } from '../entities/financeiro.entity';

@Injectable()
export class FinanceiroService {
  create(financeiro: Financeiro) {
    return 'This action adds a new financeiro';
  }

  findAll() {
    return `This action returns all financeiro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financeiro`;
  }

  update(financeiro: Financeiro) {
    return `This action updates a financeiro`;
  }

  remove(id: number) {
    return `This action removes a #${id} financeiro`;
  }
}
