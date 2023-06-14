import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssignmentSubmissionDto } from './dto/assignment-submission.dto';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateSubmissionDto } from './dto/update-assignment.dto';
import { AssignmentSubmissionEntity } from './entities/assignment-submission.entity';
import { AssignmentEntity } from './entities/assignment.entity';
import { Assignment } from './interfaces/assignment.interface';

@Injectable()
export class AssignmentService {
    constructor(
        @InjectRepository(AssignmentEntity)
        private assignmentsRepository: Repository<AssignmentEntity>,
        @InjectRepository(AssignmentSubmissionEntity)
        private assignmentsSubmissionRepository: Repository<AssignmentSubmissionEntity>
    ) { }

    
    async createAssignment(assignment: CreateAssignmentDto) {
        return this.assignmentsRepository.save(assignment)
        //     return `Assignment posted successfully`;
        // }
        // catch (e) {
        //     throw new BadRequestException();
        // }
    }
    async submitAssignment(assignment: AssignmentSubmissionDto) {
        await this.assignmentsSubmissionRepository.save(assignment)
    }

    async score(recordId: number, changes: Assignment) {
        await this.assignmentsSubmissionRepository.update({ id: recordId }, changes)
    }

}

