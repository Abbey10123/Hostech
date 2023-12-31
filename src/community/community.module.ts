import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityController } from './community.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { CommunityEntity } from './entities/community.entity';
import { OtpEntity } from './entities/otp.entity';
import { NotVerifiedEmailStrategy } from './strategies/not-verified-email.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AdminStrategy } from './strategies/admin-access.strategy';
import { TutorStrategy } from './strategies/tutor-access.strategy';
import { VerifiedEmailStrategy } from './strategies/verified-email.strategy';
import { StudentStrategy } from './strategies/student-access.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommunityEntity, OtpEntity]),
    JwtModule.register({
      secret: 'jwtEncryptionKey',
      signOptions: {
        expiresIn: '2d',
      },
    }),
  ],
  controllers: [CommunityController],
  providers: [
    CommunityService,
    NotVerifiedEmailStrategy,
    AdminStrategy,
    TutorStrategy,
    VerifiedEmailStrategy,
    StudentStrategy
  ],
  exports: [
    NotVerifiedEmailStrategy,
    AdminStrategy,
    TutorStrategy,
    VerifiedEmailStrategy,
    StudentStrategy
  ],
})
export class CommunityModule {}
