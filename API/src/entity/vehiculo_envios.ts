import { Entity, PrimaryGeneratedColumn , Unique, Column,OneToOne,JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmpty } from 'class-validator';


@Entity()

export class Vehiculo_envios {
  @PrimaryGeneratedColumn()
  vehiculo_id: number;
  @Column()
  @IsNotEmpty()
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