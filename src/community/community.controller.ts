import {
  Controller,
  Post,
  Body,
  Param,
  UseGuards,
  Get,
  Patch,
  Request,
} from '@nestjs/common';
import { CommunityService } from './community.service';
import { GetEmailDto, ValidPassword } from './dto/get-email.dto';
import { CreateAdminDto, CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AdminAccess } from './guards/admin-access.guards';
import { TutorAccess } from './guards/tutor-access.guards';
import { VerifiedEmailGuard } from './guards/verified-email.guard';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { User } from './interface/user.interface';
import { Delete } from '@nestjs/common/decorators';
import { DeleteProfileDto } from './dto/delete-profile.dto';

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

  @UseGuards(AdminAccess)
  @Post('admin-register')
  createAdmin(@Body() user: CreateAdminDto) {
    return this.communityService.createAdmin(user);
  }

  @UseGuards(AdminAccess)
  @Get('admin')
  getAdmin() {
    return `Welcome admin`;
  }

  @UseGuards(TutorAccess)
  @Get('tutor')
  getTutor() {
    return `Welcome tutor`;
  }

  @UseGuards(VerifiedEmailGuard)
  @Patch('change-password')
  changePassword(@Body() data: ChangePasswordDto, @Request() req) {
    return this.communityService.changePassword(req.user, data);
  }

  @UseGuards(VerifiedEmailGuard)
  @Patch('update')
  updateUser(@Body() user: UpdateCommunityDto, @Request() req) {
    console.log(req.user);
    return this.communityService.updateUser(req.user, user);
  }
  @UseGuards(VerifiedEmailGuard)
  @Get('profile/:id')
  getUser(@Param('id') id: number) {
    return this.communityService.getUser(Number(id));
  }

  @UseGuards(AdminAccess)
  @Delete('delete-profile')
  deleteProfile(@Body() data: DeleteProfileDto) {
    return this.communityService.deleteProfile(data.id);
  }
}
