import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'courses' })
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'admin_id' })
  adminId: number;

  @Column({ name: 'tutor_id' })
  tutorId: number;

  @Column({ name: 'course_price' })
  coursePrice: number;

  @Column({ name: 'course_name' })
  courseName: string;
  
  @Column({ default: true })
  isAvailable: boolean;

  @DeleteDateColumn({name: 'delete_at'})
  deletedAt: Date;
}
