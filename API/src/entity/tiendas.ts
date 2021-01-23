import { Entity, PrimaryGeneratedColumn , Unique, Column,OneToOne,JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmpty } from 'class-validator';

@Entity()

export class Tiendas {
  @PrimaryGeneratedColumn()
  tienda_id: number;
  @Column()
  @IsNotEmpty()
   nombre: string;

   @Column()
   @IsNotEmpty()
  direccion: string;


  @Column()
  @IsNotEmpty()
 ciudad: string;

 @Column()
 @IsNotEmpty()
barrio: string;

@Column()
@IsNotEmpty()
fecha_fundada: string;



@Column()
  @CreateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;

}