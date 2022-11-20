import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('register')
export default class Register {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ select: false })
  password!: string;

  @Column()
  role!: string;

  @Column()
  @CreateDateColumn({ type: 'date' })
  createdAt!: Date;

  @Column()
  @UpdateDateColumn({ type: 'date' })
  updatedAt!: Date;
  toBe: any;

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

  // hashPassword() {
  //   this.password = bcrypt.hashSync(this.password, 8);
  // }
}
