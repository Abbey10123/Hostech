import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignmentModule } from './assignments/assignments.module';
import { CertificatesModule } from './certificates/certificates.module';
import { TransactionsModule } from './transactions/transactions.module';
import { CommunityModule } from './community/community.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    AssignmentModule,
    CertificatesModule,
    TransactionsModule,
    CommunityModule,
    CoursesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db4free.net',
      port: 3306,
      username: 'talentuser2023',
      password: 'computer',
      database: 'talentdevapi',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
