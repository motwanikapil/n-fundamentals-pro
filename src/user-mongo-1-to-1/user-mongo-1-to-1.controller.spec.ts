import { Test, TestingModule } from '@nestjs/testing';
import { UserMongo1To1Controller } from './user-mongo-1-to-1.controller';

describe('UserMongo1To1Controller', () => {
  let controller: UserMongo1To1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserMongo1To1Controller],
    }).compile();

    controller = module.get<UserMongo1To1Controller>(UserMongo1To1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
