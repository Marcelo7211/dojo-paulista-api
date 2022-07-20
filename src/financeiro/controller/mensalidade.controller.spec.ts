import { Test, TestingModule } from '@nestjs/testing';
import { MensalidadeService } from '../service/mensalidade.service';
import { MensalidadeController } from './mensalidade.controller';

describe('MensalidadeController', () => {
  let controller: MensalidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MensalidadeController],
      providers: [MensalidadeService],
    }).compile();

    controller = module.get<MensalidadeController>(MensalidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
