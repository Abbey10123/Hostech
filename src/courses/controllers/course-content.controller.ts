import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  Get,
  UseGuards,
} from '@nestjs/common';
import { TutorAccess } from 'src/community/guards/tutor-access.guards';
import { CourseContentService } from '../services/course-content.service';
import { CreateCourseContentDto } from '../dto/create-course-content.dto';
import { UpdateCourseContentDto } from '../dto/update-course-content.dto';

@Controller('course-content')
export class CourseContentController {
  constructor(private readonly courseContentService: CourseContentService) {}

  // Create course content
  @UseGuards(TutorAccess)
  @Post()
  create(@Body() payload: CreateCourseContentDto) {
    return this.courseContentService.create(payload);
  }

  // Update course content
  @UseGuards(TutorAccess)
  @Patch(':id')
  update(
    @Body() payload: UpdateCourseContentDto,
    @Param('id') courseContentId: number,
  ) {
    return this.courseContentService.update(payload, courseContentId);
  }

  // Get course content
  @Get(':id')
  get(@Param('id') id: number) {
    return this.courseContentService.findCourseContent(id);
  }

  // List content for a particular course
  @Get('course/:id')
  getContentForCourse(@Param('id') id: number) {
    return this.courseContentService.getContentForCourse(id);
  }

  // Delete course content
  @UseGuards(TutorAccess)
  @Delete(':id')
  deleteCourseContent(@Param('id') id: number) {
    return this.courseContentService.deleteCourseContent(id);
  }
}
