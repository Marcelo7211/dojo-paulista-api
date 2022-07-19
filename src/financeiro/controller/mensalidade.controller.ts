import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Put, ParseIntPipe, HttpException, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Mensalidade } from '../entities/mensalidade.entity';
import { MensalidadeService } from '../service/mensalidade.service';


@ApiTags('Mensalidade')
@Controller('mensalidade')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class MensalidadeController {
  constructor(private readonly mensalidadeService: MensalidadeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: Mensalidade })
  create(@Body() mensalidade: Mensalidade): Promise<Mensalidade> {
    return this.mensalidadeService.create(mensalidade);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({type: [Mensalidade]})
  findAll(): Promise<Mensalidade[]> {
    return this.mensalidadeService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({type: Mensalidade})
  findOne(@Param('id') id: number): Promise<Mensalidade> {
    return this.mensalidadeService.findOneById(id);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: Mensalidade })
  update(@Body() mensalidade: Mensalidade): Promise<Mensalidade> {
    return this.mensalidadeService.update(mensalidade);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    const resultadoDelete = this.mensalidadeService.delete(id);
    
    if (resultadoDelete === undefined)
        throw new HttpException('Chamada não encontrado!', HttpStatus.NOT_FOUND);
    else
        return resultadoDelete;

  }
}
