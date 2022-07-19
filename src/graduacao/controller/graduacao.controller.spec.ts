import { Test, TestingModule } from '@nestjs/testing';
import { GraduacaoController } from './graduacao.controller';
import { GraduacaoService } from '../service/graduacao.service';

describe('GraduacaoController', () => {
  let controller: GraduacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GraduacaoController],
      providers: [GraduacaoService],
    }).compile();

    controller = module.get<GraduacaoController>(GraduacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
