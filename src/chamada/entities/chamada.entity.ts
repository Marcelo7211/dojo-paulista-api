import { ApiProperty } from "@nestjs/swagger";
import { Turma } from "src/turma/entities/turma.entity";
import Usuario from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity({name: 'tb_chamada'})
export class Chamada {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column({ type: 'date'})
    @ApiProperty()
    data: Date;

    @ManyToOne(() => Turma, (turma) => turma.chamada, {
        onDelete: "CASCADE"
    })
    @ApiProperty({ type: () => Turma })
    turma: Turma;

    @ApiProperty()
    @IsNotEmpty()
    @Column({ nullable: false}) 
    isPresente: boolean = false;

    @ManyToOne(() => Usuario, (usuario) => usuario.chamada, {
        onDelete: "CASCADE"
    })
    @ApiProperty({ type: () => Usuario })
    usuario: Usuario;
}
