import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Financeiro } from '../entities/financeiro.entity';
import { FinanceiroService } from '../service/financeiro.service';

@ApiTags('Financeiro')
@Controller('financeiro')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class FinanceiroController {
  constructor(private readonly financeiroService: FinanceiroService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: Financeiro })
  create(@Body() financeiro: Financeiro) {
    return this.financeiroService.create(financeiro);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({type: [Financeiro]})
  findAll() {
    return this.financeiroService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({type: Financeiro})
  findOne(@Param('id') id: string) {
    return this.financeiroService.findOne(+id);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: Financeiro })
  update(@Body() financeiro: Financeiro) {
    return this.financeiroService.update(financeiro);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.financeiroService.remove(+id);
  }
}
