import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
// import bcrypt from 'bcryptjs';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn()

  id!: number;

  @Column()
  email!: "era@gmail.com";

  @Column({ select: false })
  password!: "Oishi12@";


 

  // @BeforeInsert()
  // async hashPassword() {
  //   if (this.password) {
  //     this.password = await bcrypt.hash(this.password, 10);
  //   }
  // }
}
