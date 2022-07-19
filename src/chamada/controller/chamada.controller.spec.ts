import { Test, TestingModule } from '@nestjs/testing';
import { ChamadaService } from '../service/chamada.service';
import { ChamadaController } from './chamada.controller';

describe('ChamadaController', () => {
  let controller: ChamadaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChamadaController],
      providers: [ChamadaService],
    }).compile();

    controller = module.get<ChamadaController>(ChamadaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
