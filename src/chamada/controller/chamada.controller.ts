import { Controller, Get, Post, Body, Param, Delete, HttpCode, HttpStatus, Put, ParseIntPipe, HttpException, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Chamada } from '../entities/chamada.entity';
import { ChamadaService } from '../service/chamada.service';

@ApiTags('Chamada')
@Controller('chamada')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ChamadaController {
  constructor(private readonly chamadaService: ChamadaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: Chamada })
  create(@Body() chamada: Chamada): Promise<Chamada> {
    return this.chamadaService.create(chamada);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({type: [Chamada]})
  findAll() : Promise<Chamada[]> {
    return this.chamadaService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({type: Chamada})
  findOne(@Param('id') id: number): Promise<Chamada> {
    return this.chamadaService.findOneById(id);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: Chamada }) 
  update(@Body() chamada: Chamada): Promise<Chamada> {
    return this.chamadaService.update(chamada);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    const resultadoDelete = this.chamadaService.delete(id);
    
    if (resultadoDelete === undefined)
        throw new HttpException('Chamada não encontrado!', HttpStatus.NOT_FOUND);
    else
        return resultadoDelete;
  }
}
