import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Put, ParseIntPipe, HttpException, UseGuards } from '@nestjs/common';
import { TurmaService } from '../service/turma.service';
import { Turma } from '../entities/turma.entity';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@ApiTags('Turma')
@Controller('turma')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TurmaController {
  constructor(private readonly turmaService: TurmaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: Turma })
  create(@Body() turma: Turma): Promise<Turma> {
    return this.turmaService.create(turma);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({type: [Turma]})
  findAll(): Promise<Turma[]> {
    return this.turmaService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({type: Turma})
  findOne(@Param('id') id: number): Promise<Turma> {
    return this.turmaService.findOneById(id);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: Turma })
  update(@Body() turma: Turma): Promise<Turma> {
    return this.turmaService.update(turma);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    const resultadoDelete = this.turmaService.delete(id);
    
    if (resultadoDelete === undefined)
        throw new HttpException('Turma não encontrado!', HttpStatus.NOT_FOUND);
    else
        return resultadoDelete;

  }
}
