import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AdminAccess } from 'src/community/guards/admin-access.guards';
import { CoursesService } from '../services/courses.service';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { AddTutorToCourseDto } from '../dto/add-tutor-to-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  // Assign tutor to course
  @Patch('assign-tutor')
  assignTutor(@Body() payload: AddTutorToCourseDto) {
    return this.coursesService.addTutorToCourse(payload);
  }

  // Get one course
  @Get(':id')
  findCourse(@Param('id') id: number) {
    return this.coursesService.findCourse(id);
  }

  // List all courses
  @Get()
  listCourses() {
    return this.coursesService.listCourses();
  }

  // Create a course
  @UseGuards(AdminAccess)
  @Post()
  createCourse(@Body() course: CreateCourseDto) {
    return this.coursesService.createCourse(course);
  }

  // Delete a course
  @UseGuards(AdminAccess)
  @Delete(':id')
  delCourse(@Param('id') id: number) {
    return this.coursesService.delCourse(Number(id));
  }

  // Update course
  @UseGuards(AdminAccess)
  @Patch('update/:id')
  updateCourse(@Body() data: UpdateCourseDto, @Param('id') id: number) {
    return this.coursesService.updateCourse(id, data);
  }
}
