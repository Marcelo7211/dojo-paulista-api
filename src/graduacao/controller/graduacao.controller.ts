import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Put, ParseIntPipe, HttpException, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Graduacao } from '../entities/graduacao.entity';
import { GraduacaoService } from '../service/graduacao.service';

@ApiTags('Graduação')
@Controller('graduacao')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class GraduacaoController {
  constructor(private readonly graduacaoService: GraduacaoService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: Graduacao })
  create(@Body() graduacao: Graduacao): Promise<Graduacao> {
    return this.graduacaoService.create(graduacao);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({type: [Graduacao]})
  findAll(): Promise<Graduacao[]> {
    return this.graduacaoService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({type: Graduacao})
  findOne(@Param('id') id: number): Promise<Graduacao> {
    return this.graduacaoService.findOneById(id);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: Graduacao })
  update(@Body() graduacao: Graduacao): Promise<Graduacao> {
    return this.graduacaoService.update(graduacao);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    const resultadoDelete = this.graduacaoService.delete(id);
    
    if (resultadoDelete === undefined)
        throw new HttpException('Chamada não encontrado!', HttpStatus.NOT_FOUND);
    else
        return resultadoDelete;

  }
}
