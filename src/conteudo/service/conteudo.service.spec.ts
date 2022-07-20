import { Test, TestingModule } from '@nestjs/testing';
import { ConteudoService } from './conteudo.service';

describe('TurmaService', () => {
  let service: ConteudoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConteudoService],
    }).compile();

    service = module.get<ConteudoService>(ConteudoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
