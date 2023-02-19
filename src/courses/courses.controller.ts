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
import { TutorAccess } from 'src/community/guards/tutor-access.guards';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './interfaces/course.interface';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get(':id')
  findCourse(@Param('id') id: number) {
    return this.coursesService.findCourse(id);
  }

  @UseGuards(AdminAccess)
  @Post()
  createCourse(@Body() course: CreateCourseDto) {
    return this.coursesService.createCourse(course);
  }

  @UseGuards(AdminAccess)
  @Delete(':id')
  delCourse(@Param('id') id: number) {
    return this.coursesService.delCourse(Number(id));
  }

  @UseGuards(AdminAccess)
  @Post()
  courseContent(@Body() course: Course) {
    return this.coursesService.createCourse(course);
  }

  @UseGuards(AdminAccess)
  @Patch('update-course/:id')
  updateCourse(@Body() data: UpdateCourseDto, @Param('id') id: number) {
    return this.coursesService.updateCourse(id, data);
  }

  @UseGuards(TutorAccess)
  @Delete('course-content/:id')
  deleteCourseContent(@Param('id') id: number) {
    return this.coursesService.deleteCourseContent(id);
  }
}
