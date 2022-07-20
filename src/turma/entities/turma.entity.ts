import { ApiProperty } from "@nestjs/swagger";
import { Chamada } from "src/chamada/entities/chamada.entity";
import Usuario from "src/usuario/entities/usuario.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator"

@Entity({ name: 'tb_turma' })
export class Turma {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @ApiProperty()
    @Column() 
    nome: string;
    
    @ApiProperty()
    @Column()  
    descricao: string;
    
    @ApiProperty({type: [Usuario]})
    @OneToMany(() => Usuario, (usuario) => usuario.turma) 
    usuario: Usuario[];

    @OneToMany(() => Chamada, (chamada) => chamada.turma)
    @ApiProperty({type: [Chamada]})
    chamada: Chamada[];
}
