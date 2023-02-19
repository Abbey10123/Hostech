import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  adminId: number;

  @IsNotEmpty()
  tutorId: number;

  @MinLength(3)
  courseName: string;

  @IsNotEmpty()
  coursePrice: number;
}
