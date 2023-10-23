import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto/user.dto';

@Injectable()
export class UserService {
  private users: UserDto[] = [
    { id: 1, name: 'John', lastName: 'Doe' },
    { id: 2, name: 'Mary', lastName: 'Weather' },
  ];

  create(user: UserDto) {
    this.users.push(user);
  }

  findAll() {
    return this.users;
  }
}
