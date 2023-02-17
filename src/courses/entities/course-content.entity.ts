import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CourseContent } from '../interfaces/course.interface';

@Entity({ name: 'course_contents' })
export class CourseContentEntity implements CourseContent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseId: number;

  @Column()
  content: string;

  @Column({ name: 'course_requirements' })
  courseRequirements: string;

  @Column({ name: 'course_description' })
  courseDescription: string;

  @Column({ name: 'video_url' })
  videoUrl: string;
}
