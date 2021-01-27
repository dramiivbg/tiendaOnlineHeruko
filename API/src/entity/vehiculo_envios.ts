import { Entity, PrimaryGeneratedColumn , Unique, Column,OneToOne,JoinColumn, UpdateDateColumn, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmpty } from 'class-validator';


@Entity()

export class Vehiculo_envios {

  @PrimaryColumn()
   placa: string ;
   
  @Column()
  @IsNotEmpty()
   nombre: string ;

   @Column()
   @IsNotEmpty()
  color: string;

  @Column()
  @IsNotEmpty()
 marca: string;

}