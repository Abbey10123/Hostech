import { IsDate, IsNumber } from "class-validator";

export class UpdateSubmissionDto{
    @IsNumber()
    assignmentId: number;

    completion: boolean;

    @IsDate()
    createdAt : Date;

    @IsNumber()
    studentId: number;

    @IsNumber()
    score:number
}