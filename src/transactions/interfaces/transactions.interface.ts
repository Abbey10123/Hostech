export enum TransactionType{
    Credit = "credit",
    Debit = "debit"
}

export interface Transaction{
    id: number;
    userId: number;
    description: string;
    cardName: string;
    cardNumber: string;
    cvv: number;
    paymentCompleted: boolean;
    paymentDate: Date;
    transactionType : TransactionType;
}