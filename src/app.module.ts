import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignmentController } from './assignments/assignments.controller';
import { AssignmentModule } from './assignments/assignments.module';
import { CertificatesModule } from './certificates/certificates.module';
import { TransactionsModule } from './transactions/transactions.module';
import { CommunityModule } from './community/community.module';
import { CoursesModule } from './courses/courses.module';
import { Community } from './community/entities/community.entity';
import { CourseEntity } from './courses/entities/course.entity';
import { ContentEntity } from './courses/entities/courseContent.entity';

@Module({
  imports: [
    AssignmentModule, CertificatesModule, TransactionsModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'talentdevapi',
      entities:[Community, CourseEntity, ContentEntity],
      synchronize:true,
      
    }),

    CommunityModule, 
    CoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
