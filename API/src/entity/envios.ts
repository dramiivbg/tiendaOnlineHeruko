import { Entity, PrimaryGeneratedColumn , Unique, Column,OneToOne,JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmpty } from 'class-validator';

@Entity()

export class Envios {
@PrimaryGeneratedColumn()
 envio_id: number;

  @Column()
  @IsNotEmpty()
  pedido_id: number;

  @Column()
  @IsNotEmpty()
  placa_vehiculo: number;

  @Column()
  @CreateDateColumn()
  fecha_envio: Date;



  @Column()
  @CreateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;

}