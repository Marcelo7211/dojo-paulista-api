import { Module } from '@nestjs/common';
import { TurmaService } from '../service/turma.service';
import { TurmaController } from '../controller/turma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turma } from '../entities/turma.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Turma])],
  controllers: [TurmaController],
  providers: [TurmaService],
  exports: [TypeOrmModule]
})
export class TurmaModule {}
