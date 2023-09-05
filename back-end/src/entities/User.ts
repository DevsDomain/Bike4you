import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity({ name: "users" })
export class User {
  // define a chave primária como autoincremento. A propriedade primaryKeyConstraintName
  // é opcional, usamos ela para setar o nome da restrição da chave primária no SGBD
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: "pk-user" })
  id: number;
  @Column({ nullable: false, unique: true, length: 50 })
  mail: string;
  @Column({ nullable: false, length: 100 })
  password: string;
}
