import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityController } from './community.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { CommunityEntity } from './entities/community.entity';
import { OtpEntity } from './entities/otp.entity';
import { NotVerifiedEmailStrategy } from './strategies/not-verified-email.strategy';
import { JwtModule } from '@nestjs/jwt/';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommunityEntity, OtpEntity]),
    JwtModule.register({
      secret: 'jwtEcryptionKey',
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  controllers: [CommunityController],
  providers: [CommunityService, NotVerifiedEmailStrategy],
})
export class CommunityModule {}
