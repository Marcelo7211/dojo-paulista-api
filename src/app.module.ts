import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TurmaModule } from './turma/module/turma.module';
import { UsuarioModule } from './usuario/module/usuario.module';
import { ChamadaModule } from './chamada/module/chamada.module';
import { Turma } from './turma/entities/turma.entity';
import Usuario from './usuario/entities/usuario.entity';
import { Chamada } from './chamada/entities/chamada.entity';
import { Financeiro } from './financeiro/entities/financeiro.entity';
import { FinanceiroModule } from './financeiro/module/financeiro.module';
import { GraduacaoModule } from './graduacao/module/graduacao.module';
import { Graduacao } from './graduacao/entities/graduacao.entity';
import { Mensalidade } from './financeiro/entities/mensalidade.entity';
import { AuthModule } from './auth/module/auth.module';
import { Conteudo } from './conteudo/entities/conteudo.entity';
import { ConteudoModule } from './conteudo/module/conteudo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'containers-us-west-59.railway.app',
      port: 5747,
      username: 'root',
      password: 'SScdJcZ4ZmMjkaUPgW4I',
      database: 'railway',
      entities: [
        Turma, 
        Usuario, 
        Chamada, 
        Financeiro, 
        Graduacao, 
        Mensalidade, 
        Conteudo
      ],
      synchronize: true,
    }),
    TurmaModule,
    UsuarioModule,
    ChamadaModule,
    FinanceiroModule,
    GraduacaoModule,
    AuthModule,
    ConteudoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
