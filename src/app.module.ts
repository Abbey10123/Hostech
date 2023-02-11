import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
