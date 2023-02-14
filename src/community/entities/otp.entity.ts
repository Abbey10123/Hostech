import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Otp } from "../interface/otp.interface";

@Entity({name: 'otps'})
export class OtpEntity implements Otp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    otp: string;

    // @Column()
    // expired_at: Date;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;

}