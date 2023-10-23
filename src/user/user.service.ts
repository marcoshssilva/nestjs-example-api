import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto/user.dto';

@Injectable()
export class UserService {
  private users: UserDto[] = [];

  create(user: UserDto) {
    this.users.push(user);
  }

  findAll() {
    return this.users;
  }
}
