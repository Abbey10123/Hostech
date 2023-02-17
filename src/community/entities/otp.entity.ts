import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Otp, OtpReason } from '../interface/otp.interface';

@Entity({ name: 'otps' })
export class OtpEntity implements Otp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'user_id' })
  userId: number;

  @Column()
  code: string;

  // @Column({type: 'datetime', name:'expiry_date'})
  // expiryDate: Date;

  @Column({
    type: 'enum',
    enum: OtpReason,
    default: OtpReason.verifyEmail,
    nullable: false,
  })
  reason: OtpReason;
}
