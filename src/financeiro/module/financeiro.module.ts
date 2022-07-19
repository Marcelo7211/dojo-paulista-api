import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinanceiroController } from '../controller/financeiro.controller';
import { MensalidadeController } from '../controller/mensalidade.controller';
import { Financeiro } from '../entities/financeiro.entity';
import { Mensalidade } from '../entities/mensalidade.entity';
import { FinanceiroService } from '../service/financeiro.service';
import { MensalidadeService } from '../service/mensalidade.service';

@Module({
  imports: [TypeOrmModule.forFeature([Financeiro, Mensalidade])],
  controllers: [FinanceiroController, MensalidadeController],
  providers: [FinanceiroService, MensalidadeService],
  exports: [TypeOrmModule]
})
export class FinanceiroModule {}
