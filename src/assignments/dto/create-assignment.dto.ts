import { IsNotEmpty } from "class-validator";

export class CreateAssignmentDto{
  
    @IsNotEmpty()
    tutorId: number;
  
    @IsNotEmpty()
    courseId: number;
  
    @IsNotEmpty()
    createdAt: Date;

    @IsNotEmpty()
    dueDate: Date
}