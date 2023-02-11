import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommunityModule } from './community/community.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'db4free.net',
      port:3306,
      username:'talentuser2023',
      password:'computer',
      database:'talentdevapi',
      autoLoadEntities:true,
      synchronize:true
      
    }),

    CommunityModule, 
    CoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
