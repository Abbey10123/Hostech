import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Transaction, TransactionType } from "../interfaces/transactions.interface";

@Entity({name: "transactions"})
export class TransactionEntity implements Transaction{
    @PrimaryGeneratedColumn()
    id:number

    @Column({type: "int", name: "user_id"})
    userId: number;

    @Column()
    description: string;

    @Column({name: "card_name"})
    cardName: string;

    @Column({name: "card_number"})
    cardNumber: string;

    @Column()
    cvv: number;

    @Column({type:"boolean", default:false})
    paymentCompleted: boolean;

    @Column({type: "enum", enum: TransactionType, default: TransactionType.Debit, nullable:false})
    transactionType: TransactionType;

    @Column({type: "datetime", name: "payment_date"})
    paymentDate: Date;
}