import { Test, TestingModule } from '@nestjs/testing';
import { ChamadaService } from './chamada.service';

describe('ChamadaService', () => {
  let service: ChamadaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChamadaService],
    }).compile();

    service = module.get<ChamadaService>(ChamadaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
