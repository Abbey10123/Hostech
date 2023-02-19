import { IsNumber } from 'class-validator';

export class DeleteProfileDto {
  @IsNumber()
  id: number;
}
