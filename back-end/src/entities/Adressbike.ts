import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"adressbikes"})
export class Adressbike{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false, length:15})
    cep: string;

    @Column({nullable:false})
    number: number;
}