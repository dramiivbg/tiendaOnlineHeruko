import { Entity, PrimaryGeneratedColumn , Unique, Column,OneToOne,JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmpty } from 'class-validator';
import {Pedidos} from './pedidos';
import {Vehiculo_envios} from './vehiculo_envios';
import { type } from 'os';


@Entity()

export class Envios {
@PrimaryGeneratedColumn()
 envio_id: number;

  @OneToOne(type => Pedidos)
  @JoinColumn()
  pedido_id: Pedidos;

  @OneToOne(type => Vehiculo_envios)
  @JoinColumn()
  vehiculo_id: Vehiculo_envios;

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