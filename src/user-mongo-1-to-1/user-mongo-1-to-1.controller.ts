import { Controller, Get, Post } from '@nestjs/common';
import { UserMongo1To1Service } from './user-mongo-1-to-1.service';

@Controller('user-mongo-1-to-1')
export class UserMongo1To1Controller {
  constructor(private readonly userService: UserMongo1To1Service) {}

  @Post()
  create() {
    return this.userService.createUser();
  }

  @Get()
  getAll() {
    return this.userService.findAll();
  }
}
