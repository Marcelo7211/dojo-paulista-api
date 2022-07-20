import { Test, TestingModule } from '@nestjs/testing';
import { FinanceiroService } from '../service/financeiro.service';
import { FinanceiroController } from './financeiro.controller';

describe('FinanceiroController', () => {
  let controller: FinanceiroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinanceiroController],
      providers: [FinanceiroService],
    }).compile();

    controller = module.get<FinanceiroController>(FinanceiroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
