import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseEntity } from '../entities/course.entity';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { AddTutorToCourseDto } from '../dto/add-tutor-to-course.dto';
import { CommunityEntity } from 'src/community/entities/community.entity';
import { UserType } from 'src/community/interface/user.interface';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private coursesRepository: Repository<CourseEntity>,
    @InjectRepository(CommunityEntity)
    private communityRepository: Repository<CommunityEntity>,
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

  async createCourse(course: CreateCourseDto) {
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

  async updateCourse(id: number, data: UpdateCourseDto) {
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

  async addTutorToCourse(payload: AddTutorToCourseDto) {
    const course = await this.coursesRepository.findOne({
      where: { id: payload.courseId },
    });
    if (!course) {
      throw new BadRequestException({ message: 'Invalid course provided' });
    }

    const tutor = await this.communityRepository.findOne({
      where: { id: payload.tutorId, userType: UserType.Tutor },
    });

    if (!tutor) {
      throw new BadRequestException({ message: 'Invalid tutor provided' });
    }

    await this.coursesRepository.update(course.id, {
      tutorId: payload.tutorId,
    });

    course.tutorId = payload.tutorId;
    return {
      course,
      message: `Tutor assignment was successful`,
    };
  }

  listCourses() {
    return this.coursesRepository.find({ where: { isAvailable: true } });
  }
}
