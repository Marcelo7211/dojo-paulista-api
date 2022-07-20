import { ApiProperty } from "@nestjs/swagger";
import Usuario from "src/usuario/entities/usuario.entity";
import { TipoGraduacao } from "src/utilitarios/enums/TipoGraduacao";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_graduacao'})
export class Graduacao {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @ApiProperty({ type: () => Usuario })
    @ManyToOne(() => Usuario, (usuario) => usuario.graduacao, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;

    @ApiProperty()
    @Column({ nullable: false })
    graduacao: TipoGraduacao;

    @Column({ nullable: false, type: 'double precision' })
    @ApiProperty()
    mediaFinal: number;

    @ApiProperty()
    @Column()
    observacoes: string;

}
