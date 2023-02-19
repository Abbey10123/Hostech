import { IsNotEmpty, IsNumber, IsUrl } from 'class-validator';

export class CreateCourseContentDto {
  @IsNumber()
  courseId: number;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  courseRequirements: string;

  @IsNotEmpty()
  courseDescription: string;

  @IsUrl()
  videoUrl: string;
}
