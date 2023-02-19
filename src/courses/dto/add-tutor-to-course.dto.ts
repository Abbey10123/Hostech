import { IsNumber } from 'class-validator';

export class AddTutorToCourseDto {
  @IsNumber()
  courseId: number;

  @IsNumber()
  tutorId: number;
}
