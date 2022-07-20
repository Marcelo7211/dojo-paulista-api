import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator"

@Entity({ name: 'tb_conteudo' })
export class Conteudo {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @ApiProperty()
    @Column() 
    nome: string;
    
    @ApiProperty()
    @Column() 
    imagem: string;

    @ApiProperty()
    @Column() 
    rota: string;
}