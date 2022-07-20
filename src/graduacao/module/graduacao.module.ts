import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraduacaoController } from '../controller/graduacao.controller';
import { Graduacao } from '../entities/graduacao.entity';
import { GraduacaoService } from '../service/graduacao.service';


@Module({
  imports: [TypeOrmModule.forFeature([Graduacao])],
  controllers: [GraduacaoController],
  providers: [GraduacaoService],
  exports: [TypeOrmModule]
})
export class GraduacaoModule {}
