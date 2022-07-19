import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Conteudo } from '../entities/conteudo.entity';
import { ConteudoService } from '../service/conteudo.service';

@ApiTags('Conteudo')
@Controller('conteudo')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ConteudoController {
  constructor(private readonly conteudoService: ConteudoService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: Conteudo })
  create(@Body() conteudo: Conteudo): Promise<Conteudo> {
    return this.conteudoService.create(conteudo);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({type: [Conteudo]})
  findAll(): Promise<Conteudo[]> {
    return this.conteudoService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({type: Conteudo})
  findOne(@Param('id') id: number): Promise<Conteudo> {
    return this.conteudoService.findOneById(id);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: Conteudo })
  update(@Body() conteudo: Conteudo): Promise<Conteudo> {
    return this.conteudoService.update(conteudo);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    const resultadoDelete = this.conteudoService.delete(id);
    
    if (resultadoDelete === undefined)
        throw new HttpException('Conteudo não encontrado!', HttpStatus.NOT_FOUND);
    else
        return resultadoDelete;

  }
}
