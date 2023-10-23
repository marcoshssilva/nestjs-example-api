import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  create(@Body() user: UserDto) {
    this.userService.create(user);
    return 'CREATED';
  }

  @Get('/')
  findAll() {
    return this.userService.findAll();
  }
}
