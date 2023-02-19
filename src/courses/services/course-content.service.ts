import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseContentEntity } from '../entities/course-content.entity';
import { Repository } from 'typeorm';
import { CreateCourseContentDto } from '../dto/create-course-content.dto';
import { UpdateCourseContentDto } from '../dto/update-course-content.dto';
import { CoursesService } from './courses.service';

@Injectable()
export class CourseContentService {
  constructor(
    @InjectRepository(CourseContentEntity)
    private readonly courseContentRepository: Repository<CourseContentEntity>,

    private coursesService: CoursesService,
  ) {}

  async create(payload: CreateCourseContentDto) {
    try {
      await this.coursesService.findCourse(payload.courseId);
      return this.courseContentRepository.save({
        ...payload,
      });
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async findCourseContent(id: number) {
    const courseContent = await this.courseContentRepository.findOne({
      where: { id },
    });
    if (!courseContent)
      throw new BadRequestException({
        message: 'Invalid course content requested',
      });
    return courseContent;
  }

  async update(payload: UpdateCourseContentDto, courseContentId: number) {
    try {
      const courseContent = await this.findCourseContent(courseContentId);
      await this.coursesService.findCourse(payload.courseId);
      return this.courseContentRepository.update(courseContentId, {
        courseId: payload.courseId || courseContent.courseId,
        content: payload.content || courseContent.content,
        courseRequirements:
          payload.courseRequirements || courseContent.courseRequirements,
        courseDescription:
          payload.courseDescription || courseContent.courseDescription,
        videoUrl: payload.videoUrl || courseContent.videoUrl,
      });
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async deleteCourseContent(id: number) {
    try {
      const courseConFound = await this.courseContentRepository.findOne({
        where: { id },
      });
      if (courseConFound) {
        await this.courseContentRepository.softDelete(id);
        return `Course Content Deleted Successfully!`;
      }
      throw `Invalid Course Content id`;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  getContentForCourse(courseId: number) {
    return this.courseContentRepository.find({ where: { courseId } });
  }
}
