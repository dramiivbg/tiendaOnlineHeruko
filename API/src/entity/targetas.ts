import { Entity, PrimaryGeneratedColumn , Unique, Column,OneToOne,JoinColumn, UpdateDateColumn, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmpty } from 'class-validator';

@Entity()

export class Targetas {
  @PrimaryColumn()
  codigo_seguridad: string;

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