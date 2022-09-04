import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, ParseIntPipe, HttpException, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import Usuario from '../entities/usuario.entity';
import { UsuarioService } from '../service/usuario.service';

@ApiTags('Usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: Usuario })
  create(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuarioService.create(usuario);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({type: [Usuario]})
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async findAll(): Promise<Usuario[]> {
    const respo = await this.usuarioService.findAll();

    console.log(respo)

    return respo
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({type: Usuario})
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') id: number): Promise<Usuario> {
    return this.usuarioService.findOneById(id);
  }

  @Get('email/:email')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({type: Usuario})
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findByuser(@Param('email') email: string): Promise<Usuario> {
    return this.usuarioService.findOneByEmail(email);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: Usuario })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuarioService.update(usuario);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  delete(@Param('id', ParseIntPipe) id: number) {
    const resultadoDelete = this.usuarioService.delete(id);
    
    if (resultadoDelete === undefined)
        throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);
    else
        return resultadoDelete;
  }
}
