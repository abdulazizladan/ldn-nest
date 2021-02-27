import { Injectable } from '@nestjs/common';
import { user } from './models/user.model';

// This should be a real class/interface representing a user entity
export type User = user;

@Injectable()
export class UsersService {
  private readonly users : user[] = [
    {
      userId: 1,
      email: 'abdulazizladan@gmail.com',
      password: 'password',
    },
    {
      userId: 2,
      email: 'a@b.c',
      password: 'ccddab15',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}