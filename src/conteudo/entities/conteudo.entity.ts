import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator"

@Entity({ name: 'tb_conteudo' })
export class Conteudo {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @ApiProperty() 
    nome: string;
    
    @ApiProperty() 
    imagem: string;

    @ApiProperty() 
    rota: string;
}
