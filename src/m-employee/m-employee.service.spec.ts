import { Test, TestingModule } from '@nestjs/testing';
import { MEmployeeService } from './m-employee.service';

describe('MEmployeeService', () => {
  let service: MEmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MEmployeeService],
    }).compile();

    service = module.get<MEmployeeService>(MEmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
