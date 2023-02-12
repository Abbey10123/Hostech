import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './entities/course.entity';
import { CourseContentEntity } from './entities/course-content.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity, CourseContentEntity])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
