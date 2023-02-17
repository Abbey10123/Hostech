import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentController } from './assignments.controller';
import { AssignmentService } from './assignments.service';
import { AssignmentSubmissionEntity } from './entities/assignment-submission.entity';
import { AssignmentEntity } from './entities/assignment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AssignmentEntity, AssignmentSubmissionEntity]),
  ],
  controllers: [AssignmentController],
  providers: [AssignmentService],
})
export class AssignmentModule {}
