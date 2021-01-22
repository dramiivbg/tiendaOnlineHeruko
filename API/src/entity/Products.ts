import { Entity, PrimaryGeneratedColumn , Unique, Column,OneToOne,JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmpty } from 'class-validator';
import { Products_c } from './Products_c';
@Entity()

export class Products {
  @PrimaryGeneratedColumn()
   producto_id: number;

  @Column()
  @IsNotEmpty()
  cantidad: number;

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