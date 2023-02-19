import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from 'src/community/interface/user.interface';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseEntity } from './entities/course.entity';
import { Course } from './interfaces/course.interface';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private coursesRepository: Repository<CourseEntity>
  ){}

  
  async createCourse(course) {
   try{
    if(UserType.Admin)
    await this.coursesRepository.save(course)
    return 'Course created successfully';
   }
    catch (e){
      throw new BadRequestException
    }
  }
  async delCourse (courseId: number) {
    try{
      if(UserType.Admin)
      await this.coursesRepository.softDelete({id:courseId})
      return 'Course successfully deleted';
     }
      catch (e){
        throw new BadRequestException
      }
}

  // findAll() {
  //   return `This action returns all courses`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} course`;
  // }

  // update(id: number, updateCourseDto: UpdateCourseDto) {
  //   return `This action updates a #${id} course`;
  // }
}
