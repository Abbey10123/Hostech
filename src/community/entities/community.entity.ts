import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Gender, User, UserType } from '../interface/user.interface';

@Entity({
  name: ' community',
})
export class CommunityEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'full_name' })
  fullName: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.PreferNotToSay,
    nullable: false,
  })
  gender: Gender;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.Student,
    nullable: false,
  })
  userType: UserType;

  @Column({
    type: 'boolean',
    default: true,
    name: 'email_verified',
  })
  emailVerified: boolean;

  @Column()
  title: string;

  @Column({ type: 'boolean', default: false, name: 'logged_in' })
  loggedIn: boolean;

  @DeleteDateColumn({ name: 'delete_date_column' })
  deletedAt?: Date;
}
