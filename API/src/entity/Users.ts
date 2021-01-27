import { Entity, PrimaryGeneratedColumn , Unique, Column, UpdateDateColumn, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmail } from 'class-validator';
import * as bcrypt from 'bcryptjs';

@Entity()
@Unique(['username'])
export class Users {
 @PrimaryColumn()
   cedula: number;
   
  @Column()
  @IsNotEmpty()
  username: string;

  @Column()
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @Column()
  @IsEmail()
  @MinLength(6)
  @IsNotEmpty()
  gmail: string;

  @Column()
  @MinLength(6)
  @IsNotEmpty()
  direccion: string;



  @Column()
  @IsNotEmpty()
  pais: string;

  @Column()
  @IsNotEmpty()
  role: string;

  @Column()
  @CreateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;

  hashPassword(): void {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }

  checkPassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}
