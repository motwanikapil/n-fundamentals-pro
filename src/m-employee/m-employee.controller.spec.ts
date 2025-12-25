import { Test, TestingModule } from '@nestjs/testing';
import { MEmployeeController } from './m-employee.controller';

describe('MEmployeeController', () => {
  let controller: MEmployeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MEmployeeController],
    }).compile();

    controller = module.get<MEmployeeController>(MEmployeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
