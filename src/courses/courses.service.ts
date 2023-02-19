import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseContentEntity } from './entities/course-content.entity';
import { CourseEntity } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private courseRepository: Repository<CourseEntity>,
    private courseContentRepository:Repository<CourseContentEntity>,
  ){}

  async findCourse(id: number) {
    try {
      const availableCourse = await this.courseRepository.findOne({
      where: { id: id },
    });
    if (!availableCourse) {
      throw new Error('Course does not exist');
    }
    
    return availableCourse;
  } 
  catch (err) {
    console.log(err);
    return err;
  }
    
  }






  create(createCourseDto: CreateCourseDto) {
    return 'This action adds a new course';
  }

  findAll() {
    return `This action returns all courses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
