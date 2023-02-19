import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseEntity } from './entities/course.entity';
import { CourseContentEntity } from './entities/course-content.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private coursesRepository: Repository<CourseEntity>,
    @InjectRepository(CourseContentEntity)
    private courseConRepository: Repository<CourseContentEntity>,
  ) {}

  async findCourse(id: number) {
    try {
      const availableCourse = await this.coursesRepository.findOne({
        where: { id: id },
      });
      if (!availableCourse) {
        throw new Error('Course does not exist');
      }

      return availableCourse;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async createCourse(course) {
    try {
      await this.coursesRepository.save(course);
      return 'Course created successfully';
    } catch (e) {
      throw new BadRequestException();
    }
  }
  async delCourse(courseId: number) {
    try {
      await this.coursesRepository.softDelete({ id: courseId });
      return 'Course successfully deleted';
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async updateCourse(id: number, data) {
    try {
      const courseFound = await this.coursesRepository.findOne({
        where: { id },
      });
      if (courseFound) {
        await this.coursesRepository.update(
          {
            id: id,
          },
          {
            courseName: data.courseName || courseFound.courseName,
            coursePrice: data.coursePrice || courseFound.coursePrice,
            isAvailable: data.isAvailable || courseFound.isAvailable,
          },
        );
        const updatedCourse = await this.coursesRepository.findOne({
          where: { id },
        });
        return {
          updatedCourse,
          msg: `Course updated successfully`,
        };
      }
      throw `Invalid course id`;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async deleteCourseContent(id: number) {
    try {
      const courseConFound = await this.courseConRepository.findOne({
        where: { id },
      });
      if (courseConFound) {
        await this.courseConRepository.softDelete(id);
        return `Course Content Deleted Successfully!`;
      }
      throw `Invalid Course Content id`;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
