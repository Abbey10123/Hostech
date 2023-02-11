import { Module } from '@nestjs/common';
import { AssignmentController } from './assignments.controller';
import { AssignmentService } from './assignments.service';

@Module({
  controllers: [AssignmentController],
  providers: [AssignmentService]
})
export class AssignmentModule {}
