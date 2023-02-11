export interface Assignment {
    
    tutorId: number;
    adminId: number;
    courseId: number;
    createdAt: Date;
    dueDate: Date;
}     

export interface AssignmentSubmission {
    assignmentId: number;
    score: number;
    completion: boolean;
    createdAt: Date;
    studentId: number;
}     