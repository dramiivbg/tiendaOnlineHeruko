import { Entity, PrimaryGeneratedColumn , Unique, Column,OneToOne,JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmpty } from 'class-validator';

@Entity()

export class Pedidos {
  @PrimaryGeneratedColumn()
  pedido_id: number;
  @Column()
  @IsNotEmpty()
   user_id: number;

   @Column()
   @IsNotEmpty()
  pago_id: number;

   @Column()
   @IsNotEmpty()
  direccion: string;

  @Column()
  @IsNotEmpty()
 ciudad: string;

 @Column()
 @IsNotEmpty()
producto_id: number;

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