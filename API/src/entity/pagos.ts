import { Entity, PrimaryGeneratedColumn , Unique, Column,OneToOne,JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmpty } from 'class-validator';
import {Targetas} from './targetas';

@Entity()

export class Pagos {
  @PrimaryGeneratedColumn()
  pago_id: number;
  @OneToOne(type => Targetas)
  @JoinColumn()
   targeta_id: Targetas;

   @Column()
   @IsEmpty()
  efecty: number;


  @Column()
  @IsEmpty()
 a_la_mano: number;

   
@Column()
@CreateDateColumn()
fecha_pago: Date;

@Column()
  @CreateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;

}