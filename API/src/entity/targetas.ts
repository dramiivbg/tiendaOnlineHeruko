import { Entity, PrimaryGeneratedColumn , Unique, Column,OneToOne,JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmpty } from 'class-validator';
import {Tiendas} from './tiendas';
@Entity()

export class Targetas {
  @PrimaryGeneratedColumn()
   targeta_id: number;

  @Column()
  @IsNotEmpty()
  nombre_targeta: string;

  @Column()
  @IsNotEmpty()
  nombre_y_apellido: string;

  @Column()
  @IsNotEmpty()
  tipo_targeta: string;

  @Column()
  @IsNotEmpty()
  fecha_vencimiento: string;

  @Column()
  @IsNotEmpty()
  codigo_segurida: string;

  @Column()
  @IsNotEmpty()
  tipo_documento: string;


  @Column()
  @IsNotEmpty()
  numero_documento: number;







  @Column()
  @CreateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;

}