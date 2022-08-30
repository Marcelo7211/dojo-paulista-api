import { ApiProperty } from "@nestjs/swagger";
import { Chamada } from "src/chamada/entities/chamada.entity";
import { Graduacao } from "src/graduacao/entities/graduacao.entity";
import { Turma } from "src/turma/entities/turma.entity";
import { TipoGraduacao } from "src/utilitarios/enums/TipoGraduacao";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../../utilitarios/enums/Role";
import { IsEmail, IsNotEmpty, IsInt, IsDate } from "class-validator"

@Entity({ name: 'tb_usuario' })
export default class Usuario {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ nullable: false, length: 1000 })
    nome: string;

    @ApiProperty()
    @IsEmail()
    @Column({ nullable: false, length: 1000 })
    email: string;

    @ApiProperty()
    @Column({ nullable: false, length: 1000 })
    senha: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({ nullable: false, type: 'BYTEA'  })
    foto: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({ nullable: false, type: 'BYTEA' })
    qrCode: string;

    @Column()
    //@IsDate()
    @ApiProperty()
    dataNascimento: string;

    @Column()
    @ApiProperty()
    rg: string;

    @Column({ nullable: false })
    @ApiProperty()
    cpf: string;

    @Column()
    @ApiProperty()
    isPcd: boolean = false;

    @Column({ nullable: true })
    @ApiProperty()
    detalhePcd: string;

    @Column()
    @ApiProperty()
    @Column({ nullable: true })
    responsavel: string;

    @Column()
    @ApiProperty()
    @Column({ nullable: true })
    responcavelCpf: string;

    @Column({ nullable: false, type: 'double precision' })
    @ApiProperty()
    peso: number;

    @Column({ nullable: false, type: 'double precision' })
    @ApiProperty()
    altura: number;

    @Column({ nullable: false })
    @ApiProperty()
    faixa: TipoGraduacao;

    @ApiProperty()
    @Column({ nullable: false })
    endereco: string;

    @IsInt()
    @Column({ nullable: false, type: 'int' })
    @ApiProperty()
    numero: number;

    @Column({ nullable: false, type: 'bigint' })
    @ApiProperty()
    @Column({ nullable: true })
    cep: number;

    @Column({ nullable: false })
    @ApiProperty()
    telefone: string;

    @ApiProperty({ type: () => Turma })
    @ManyToOne(() => Turma, (turma) => turma.usuario, {
        onDelete: "CASCADE"
    })
    turma: Turma;

    @Column({ nullable: false })
    @ApiProperty()
    role: Role

    @OneToMany(() => Chamada, (chamada) => chamada.usuario)
    @ApiProperty({ type: () => [Chamada] })
    chamada: Chamada[];

    @OneToMany(() => Graduacao, (graduacao) => graduacao.usuario)
    @ApiProperty({ type: () => [Graduacao] })
    graduacao: Graduacao[];
}
