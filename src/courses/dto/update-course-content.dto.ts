import { IsNotEmpty, IsNumber, IsOptional, IsUrl } from 'class-validator';

export class UpdateCourseContentDto {
  @IsOptional()
  @IsNumber()
  courseId: number;

  @IsOptional()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsNotEmpty()
  courseRequirements: string;

  @IsOptional()
  @IsNotEmpty()
  courseDescription: string;

  @IsOptional()
  @IsUrl()
  videoUrl: string;
}
