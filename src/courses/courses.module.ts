import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './entities/course.entity';
import { ContentEntity } from './entities/courseContent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity, ContentEntity])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
