import { Entity, PrimaryGeneratedColumn ,  Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import {  IsNotEmpty} from 'class-validator';

@Entity()

export class Products {
  @PrimaryGeneratedColumn()
   producto_id: number;

  @Column()
  @IsNotEmpty()
  ciudad_de_exportacion: string;

  @Column()
  @IsNotEmpty()
  tipo_producto: string;

  @Column()
  @IsNotEmpty()
  valor: number;



  @Column()
  @CreateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;

}