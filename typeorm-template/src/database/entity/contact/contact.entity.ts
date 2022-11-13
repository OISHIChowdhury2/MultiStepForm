import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('contact')
export default class Contact {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  msg!: string;

  @Column()
  @CreateDateColumn({ type: 'date' })
  createdAt!: Date;

  @Column()
  @UpdateDateColumn({ type: 'date' })
  updatedAt!: Date;
  toBe: any;
}
