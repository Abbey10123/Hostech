import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityController } from './community.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { CommunityEntity } from './entities/community.entity';
import { JwtModule } from '@nestjs/jwt';
import { NotVerifiedEmailStrategy } from './strategies/not-verified-email.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([CommunityEntity]),
            JwtModule.register({
             secret:'jwtEncryptionKey',
             signOptions:{
              expiresIn:'3m',
             }
            })
           ],
  controllers: [CommunityController],
  providers: [CommunityService, NotVerifiedEmailStrategy],
  
})
export class CommunityModule {}
