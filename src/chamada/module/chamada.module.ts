import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChamadaController } from '../controller/chamada.controller';
import { Chamada } from '../entities/chamada.entity';
import { ChamadaService } from '../service/chamada.service';

@Module({
  imports: [TypeOrmModule.forFeature([Chamada])],
  controllers: [ChamadaController],
  providers: [ChamadaService],
  exports: [TypeOrmModule],
})
export class ChamadaModule {}
