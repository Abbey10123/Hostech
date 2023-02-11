export interface Transaction{
    id: number;
    email: string;
    course: string;
    cardName: string;
    cardNumber: string;
    cvv: number;
    paymentCompleted: boolean;
    paymentDate: Date;
}