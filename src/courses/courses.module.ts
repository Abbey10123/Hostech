import { Module } from '@nestjs/common';
import { CoursesService } from './services/courses.service';
import { CoursesController } from './controllers/courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './entities/course.entity';
import { CourseContentEntity } from './entities/course-content.entity';
import { CommunityModule } from 'src/community/community.module';
import { JwtModule } from '@nestjs/jwt';
import { CommunityEntity } from 'src/community/entities/community.entity';
import { CourseContentService } from './services/course-content.service';
import { CourseContentController } from './controllers/course-content.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CourseEntity,
      CourseContentEntity,
      CommunityEntity,
    ]),
    CommunityModule,
    JwtModule.register({
      secret: 'jwtEncryptionKey',
      signOptions: {
        expiresIn: '2d',
      },
    }),
  ],
  controllers: [CoursesController, CourseContentController],
  providers: [CoursesService, CourseContentService],
})
export class CoursesModule {}
