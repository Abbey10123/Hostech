import { Get, Patch,Controller, Param } from '@nestjs/common';
import { Body, Post, UseGuards } from '@nestjs/common/decorators';
import { AdminAccess } from 'src/community/guards/admin-access.guards';
import { StudentAccess } from 'src/community/guards/student-access.guard';
import { TutorAccess } from 'src/community/guards/tutor-access.guards';
import { AssignmentService } from './assignments.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { Assignment } from './interfaces/assignment.interface';

@Controller('assignment')
export class AssignmentController {
    constructor(private readonly assignmentService : AssignmentService){}
@UseGuards(TutorAccess)
@Post()
createAssignment(@Body() assignment:CreateAssignmentDto ){
    return this.assignmentService.createAssignment(assignment)
}

@UseGuards(StudentAccess)
// @UseGuards(TutorAccess)
@Get()
viewAssignment(){
    return`Assignments`
}

@UseGuards(StudentAccess)
@Post('submission')
submitAssignment(){
    return `Submitted`
}

@UseGuards(TutorAccess)
@Get('submission')
submittedAssignment(){
    return `Submitted Assignments`}

@UseGuards(TutorAccess)
@Patch('submission/:id')
score(@Body() changes : Assignment, @Param("id") recordId: Number){
    return this.assignmentService.score(Number(recordId), changes)
}

}
