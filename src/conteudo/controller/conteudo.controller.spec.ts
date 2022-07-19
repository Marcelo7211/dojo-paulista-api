import { Test, TestingModule } from '@nestjs/testing';
import { ConteudoService } from '../service/conteudo.service';
import { ConteudoController } from './conteudo.controller';


describe('TurmaController', () => {
  let controller: ConteudoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConteudoController],
      providers: [ConteudoService],
    }).compile();

    controller = module.get<ConteudoController>(ConteudoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
