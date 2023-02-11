export enum UserType{
    admin = "Administrator",
    student= "Student",
    tutor = "Facilitator"
}



export interface Assignment {
    userType: UserType;
    userId: number;
    tutorId: number;
    adminId: number;
    courseName: string;
    courseId: string;
    results: number ;
    completion: boolean;
    createdAt: Date;
    dueDate: Date;
}     