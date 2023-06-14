import { IsNotEmpty, IsNumber, IsDate } from "class-validator";

export class AssignmentSubmissionDto{
    @IsNumber()
    assignmentId: number;

    completion: boolean;

    @IsDate()
    createdAt : Date;

    @IsNumber()
    studentId: number;
}