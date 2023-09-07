import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bike } from "./Bike";
import { User } from "./User";

@Entity({name:"rents"})
export class Rent{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    date: Date;

    @Column({nullable:false})
    ownerevaluation: number;

    @Column({nullable:true})
    clientevaluation: number;

    @ManyToOne(() => Bike, (bike) => bike.rents)
    @JoinColumn({name:"idbike"})
    bike: Bike;

    @ManyToOne(() => User, (user) => user.rents)
    @JoinColumn({name:"iduser"})
    user: User;
}