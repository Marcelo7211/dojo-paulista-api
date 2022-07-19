import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bcrypt } from 'src/auth/bcrypt/bcrypt';
import { UsuarioController } from '../controller/usuario.controller';
import Usuario from '../entities/usuario.entity';
import { UsuarioService } from '../service/usuario.service';


@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuarioController],
  providers: [UsuarioService, Bcrypt],
  exports: [TypeOrmModule, UsuarioService]
})
export class UsuarioModule {}
