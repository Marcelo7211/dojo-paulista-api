import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConteudoController } from "../controller/conteudo.controller";
import { Conteudo } from "../entities/conteudo.entity";
import { ConteudoService } from "../service/conteudo.service";

@Module({
  imports: [TypeOrmModule.forFeature([Conteudo])],
  controllers: [ConteudoController],
  providers: [ConteudoService],
  exports: [TypeOrmModule]
})
export class ConteudoModule {}
