import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CourseContentEntity } from './course-content.entity';

@Entity({ name: 'courses' })
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'course_name' })
  courseName: string;

  @Column({ name: 'course_price' })
  coursePrice: number;

  @Column({ default: true })
  isAvailable: boolean;
}
