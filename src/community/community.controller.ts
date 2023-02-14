import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { CommunityService } from './community.service';
import { NotVerifiedEmailGuard } from './guards/not-verified-email.guard';
import { User } from './interface/user.interface';

@Controller('user')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Post()
  create(@Body() user: User) {
    return this.communityService.createUser(user);
  }

  @Post('login')
  login(@Body() loginInfo: User) {
    // and this
    return this.communityService.login(loginInfo);
  }

  @UseGuards(NotVerifiedEmailGuard)
  @Get('profile')
  getProfile() {
    return `Profile is accesible`;
  }

  /*
  @Get()
  findAll() {
    return this.communityService.findAll();
  }

  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommunityDto: UpdateCommunityDto) {
    return this.communityService.update(+id, updateCommunityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.communityService.remove(+id);
  } */
}
