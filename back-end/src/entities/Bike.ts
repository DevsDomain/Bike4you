import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Brand } from "./Brand"
import { Photo } from "./Photo";
import { Category } from "./Category";
import { User } from "./User";
import { Rent } from "./Rent";

export type Gender = "masculino" | "feminino" | "unissex";
export type Material = "aluminio" | "carbono" | "ferro";

@Entity({ name: "bikes" })
export class Bike {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, length: 30 })
    color: string;

    @Column({ nullable: true, length: 10 })
    size: string;

    @Column({
        nullable: true, type: "enum",
        enum: ["aluminio", "carbono", "ferro"],
    })
    material: Material;

    @Column({
        nullable: true,
        type: "enum",
        enum: ["feminino", "masculino", "unissex"],
    })
    gender: Gender;

    @Column({ nullable: true, length: 10 })
    speedkit: string;

    @Column({ nullable: true, type: "float" })
    rim: number;

    @Column({ nullable: true })
    suspension: boolean;

    @Column({ nullable: true, length: 200 })
    description: string;

    @Column({ nullable: true, type: "decimal", precision: 10, scale: 2 })
    hourlyvalue: number;

    @Column({ nullable: true, type: "decimal", precision: 10, scale: 2 })
    dailyvalue: number;

    @Column({ nullable: true, type: "float" })
    latitude: number;

    @Column({ nullable: true, type: "float" })
    longitude: number;

    @ManyToOne(() => Brand, { nullable: true })
    @JoinColumn({ name: "idbrand" })
    brand: Brand;

    @ManyToOne(() => Category, { nullable: true })
    @JoinColumn({ name: "idcategory" })
    category: Category

    @ManyToOne(() => User, { nullable: true })
    @JoinColumn({ name: "iduser" })
    user: User;

    @OneToMany(() => Photo, (photo) => photo.bike)
    photos: Photo[];

    @OneToMany(() => Rent, (rent) => rent.bike)
    rents: Rent[];
}