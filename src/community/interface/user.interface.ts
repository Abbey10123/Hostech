export enum UserType{
    Admin = "Administrator",
    Student = "Student",
    Tutor = "Facilitator"
}

export interface User {
    id: number;
    fullName: string;
    phoneNumber: number;
    email: string;
    password : string;
    sex : string;
    userType: UserType;
    title : string;
}