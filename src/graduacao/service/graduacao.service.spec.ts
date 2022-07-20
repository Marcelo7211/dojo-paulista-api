import { Test, TestingModule } from '@nestjs/testing';
import { GraduacaoService } from './graduacao.service';

describe('GraduacaoService', () => {
  let service: GraduacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraduacaoService],
    }).compile();

    service = module.get<GraduacaoService>(GraduacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
