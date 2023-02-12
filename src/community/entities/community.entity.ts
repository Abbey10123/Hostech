import { CourseEntity } from 'src/courses/entities/course.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User, UserType, Gender } from '../interface/user.interface';

@Entity({ name: 'users' })
export class Community implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'full_name' })
  fullName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  title: string;

  @Column({ nullable: true, name: 'user_type' })
  userType: UserType;

  @Column({ default: Gender.PreferNotToSay })
  gender: Gender;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @OneToMany(() => CourseEntity, (course) => course.UserType)
  courses: CourseEntity[];
}
