import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import bcrypt from 'bcryptjs';

@Entity('register')
export default class Register {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  companyName!: string;

  @Column()
  representativeName!: string;

  @Column({ unique: true })
  representativeId!: string;

  @Column()
  companyAddress!: string;

  @Column({ unique: true })
  companyEmail!: string;

  @Column({ unique: true })
  companyMobile!: number;

  @Column()
  ownerName!: string;

  @Column()
  ownerContact!: number;

  @Column()
  postalCode!: number;

  @Column( {type: String})
  tinCertificateImage!: string;

  // @BeforeInsert()
  // async hashPassword() {
  //   if (this.password) {
  //     this.password = await bcrypt.hash(this.password, 10);
  //   }
  // }

  // hashPassword() {
  //   this.password = bcrypt.hashSync(this.password, 8);
  // }
}
