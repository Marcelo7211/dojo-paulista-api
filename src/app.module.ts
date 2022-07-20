import { Module } from '@nestjs/common';
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
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    /*TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Admin357/',
      database: 'db_dojo_paulista',
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
    }),*/
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
      autoLoadEntities: true,
    }),
    TurmaModule,
    UsuarioModule,
    ChamadaModule,
    FinanceiroModule,
    GraduacaoModule,
    AuthModule,
    ConteudoModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
