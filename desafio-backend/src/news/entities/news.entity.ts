import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class News {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    titulo:string;
    @Column()
    subtitulo:string;
    @Column()
    conteudo:string;
    @Column()
    autor:string;
    @CreateDateColumn()
    data_da_postagem: Date;
    @UpdateDateColumn()
    data_da_alteracao: Date;
}
