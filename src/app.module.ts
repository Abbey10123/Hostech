import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommunityModule } from './community/community.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [CommunityModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
