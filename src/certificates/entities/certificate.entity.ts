import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Certificate } from '../interfaces/certificate.interface';

@Entity({ name: 'certificates' })
export class CertificateEntity implements Certificate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'admin_id' })
  adminId: number;

  @Column({ name: 'certificate_content' })
  certificateContent: string;

  @Column({ type: 'int', name: 'course_id' })
  courseId: number;
}
