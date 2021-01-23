import { Entity, PrimaryGeneratedColumn , Unique, Column,OneToOne,JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmpty } from 'class-validator';

@Entity()

export class Pagos {
  @PrimaryGeneratedColumn()
  pago_id: number;
  @Column()
  @IsEmpty()
   targeta_credito: number;

   @Column()
   @IsEmpty()
  efectivo: number;

   
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