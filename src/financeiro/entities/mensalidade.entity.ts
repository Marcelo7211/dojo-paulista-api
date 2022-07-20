import { ApiProperty } from "@nestjs/swagger";
import Usuario from "src/usuario/entities/usuario.entity";
import { Mes } from "src/utilitarios/enums/Mes";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tb_mensalidade' })
export class Mensalidade {

   @PrimaryGeneratedColumn()
   @ApiProperty()
   id: number;

   @IsNotEmpty()
   @ApiProperty()
   dataPagamento: Date;

   @IsNotEmpty()
   @Column({ nullable: false })
   @ApiProperty()
   valor: number;

   @ApiProperty()
   @IsNotEmpty()
   @Column({ nullable: false })
   mesReferencia: Mes;

   @ApiProperty({ type: () => Usuario })
   @ManyToOne(() => Usuario)
   aluno: Usuario;

   @ApiProperty({ type: () => Usuario })
   @ManyToOne(() => Usuario)
   recebidoPor: Usuario;
}
