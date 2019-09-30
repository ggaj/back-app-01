import {Entity, Column} from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class Produto extends BaseEntity {

    @Column({ length: 100 })
    nome: string;

    @Column({ type: "text", nullable:true })
    descricao: string;

    @Column({ type:"float" })
    preco: number;

}