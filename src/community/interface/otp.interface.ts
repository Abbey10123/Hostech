export enum OtpReason{
    verifyEmail = "verify-email",
    verifyPayment = "verify-payment",
}


export interface Otp{
    userId: number;
    code:string;
    expiryDate: Date;
    reason:OtpReason;
}
