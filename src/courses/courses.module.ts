import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './entities/course.entity';
import { CourseContentEntity } from './entities/course-content.entity';
import { CommunityModule } from 'src/community/community.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([CourseEntity, CourseContentEntity]),
    CommunityModule,
    JwtModule.register({
      secret: 'jwtEncryptionKey',
      signOptions: {
        expiresIn: '2d',
      },
    }),
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
