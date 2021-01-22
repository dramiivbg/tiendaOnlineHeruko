import { Entity, PrimaryGeneratedColumn , Unique, Column,OneToOne,JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmpty } from 'class-validator';

@Entity()

export class Products_c {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
   producto_id: number;
  @Column()
  @IsNotEmpty()
   user_id: number;

   @Column()
   @IsNotEmpty()
  veces_comprado: number;



  @Column()
  @CreateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;

}