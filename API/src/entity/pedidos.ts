import { Entity, PrimaryGeneratedColumn , Unique, Column,OneToOne,JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmpty } from 'class-validator';
import {Users} from './Users';
import {Pagos} from './pagos';
import {Products} from './Products';
@Entity()

export class Pedidos {
  @PrimaryGeneratedColumn()
  pedido_id: number;
  @OneToOne(type => Users)
  @JoinColumn()
   cedula_user: Users;

   @OneToOne(type => Pagos)
  @JoinColumn()
  pago_id: Pagos;

   @Column()
   @IsNotEmpty()
  direccion: string;

  @Column()
  @IsNotEmpty()
 ciudad: string;

 @OneToOne(type => Products)
 @JoinColumn()
producto_id: Products;

@Column()
@CreateDateColumn()
fecha_pedido: Date;

@Column()
  @CreateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;

}