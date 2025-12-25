import { Test, TestingModule } from '@nestjs/testing';
import { UserMongo1To1Service } from './user-mongo-1-to-1.service';

describe('UserMongo1To1Service', () => {
  let service: UserMongo1To1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserMongo1To1Service],
    }).compile();

    service = module.get<UserMongo1To1Service>(UserMongo1To1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
