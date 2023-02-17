export enum OtpReason {
    verifyEmail = "verify-email",
    verifyPayment = "verify-payment",
    resetPassword = "reset-password"
}


export interface Otp {
    userId: number;
    code: string;
    expiryDate: Date;
    reason: OtpReason;
}
