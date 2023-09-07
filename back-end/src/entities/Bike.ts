import { Column, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm";
import { Brand } from "./Brand";
import { Category } from "./Category";
import { Photo } from "./Photo";
import { Rent } from "./Rent";
import { User } from "./User";
import { Adressbike } from "./Adressbike";

export type Gender = "masculino" | "feminino" | "unissex";
export type Material = "alumínio" | "carbono" | "ferro";

@Entity({ name: "bikes" })
export class Bike {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({nullable:false, length:30})
    color:string;

    @Column({nullable:false, length:10})
    size:string;
   
    @Column({nullable:false, type:"enum", enum:["alumínio","carbono","ferro"]})
    material:Material;

    @Column({nullable:false, type:"enum", enum:["masculino","feminino","unissex"]})
    gender:Gender;

    @Column({nullable:false, length:10})
    sppedkit:string;

    @Column({nullable:false})
    aro:number;

    @Column({nullable:false})
    suspensao:boolean;

    @Column({nullable:false})
    hourlyvalue:number;

    @Column({nullable:false})
    dailylyvalue:number;

    @Column({nullable:false, length:200})
    description:string;

    @Column({nullable:false})
    status:boolean

    @ManyToOne(() => Brand)
    @JoinColumn({name: "idbrand" })
    brand: Brand;

    @ManyToOne(() => Category)
    @JoinColumn({name: "idcategory" })
    category: Category;

    @OneToMany(() => Photo, (photo) => photo.bike)
    photos: Photo[];

    @ManyToOne(() => User)
    @JoinColumn({name: "iduser" })
    user: User;

    @OneToMany(() => Rent, (rent) => rent.bike)
    rents: Rent[];

    @OneToOne(() => Adressbike)
    @JoinColumn()
    adressbike: Adressbike[];
}