import { Controller, Post, Body, Param, Patch } from '@nestjs/common';
import { CommunityService } from './community.service';
import { GetEmailDto, ValidPassword } from './dto/get-emial.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './interface/user.interface';

@Controller('user')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.communityService.createUser(user);
  }

  @Post('login')
  login(@Body() loginInfo: LoginUserDto) {
    // and this
    return this.communityService.login(loginInfo);
  }

  @Post('forgot-password')
  forgotPassword(@Body() user: GetEmailDto) {
    return this.communityService.forgotPassword(user.email);
  }

  @Post('reset-password/:otp')
  resetPassword(@Param('otp') otp: number, @Body() password: ValidPassword) {
    return this.communityService.resetPassword(otp, password.password);
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
