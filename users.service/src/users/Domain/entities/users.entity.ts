import { hashSync } from 'bcrypt';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserModel } from '../model/user.model';

type UserRole = 'admin' | 'user';

@Entity('users')
export class UsersEntity implements Required<UserModel> {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  emailConfirmed: boolean;

  @Column()
  phoneNumber: number;

  @Column()
  phoneNumberConfirmed: boolean;

  @Column()
  profile: string;

  @Column()
  language: string;

  @Column()
  ipAddress: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'user'],
    default: 'user',
  })
  role: UserRole;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 12);
  }
}
