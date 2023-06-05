import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class News {
    @PrimaryGeneratedColumn()
    id: number;
    @ApiProperty()
    @Column()
    titulo:string;
    @ApiProperty()
    @Column()
    subtitulo:string;
    @ApiProperty()
    @Column()
    conteudo:string;
    @ApiProperty()
    @Column()
    autor:string;
    @CreateDateColumn()
    data_da_postagem: Date;
    @UpdateDateColumn()
    data_da_alteracao: Date;
}
