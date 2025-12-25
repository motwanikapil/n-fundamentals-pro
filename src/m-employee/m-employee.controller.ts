import { Controller, Get, Post } from '@nestjs/common';
import { MEmployeeService } from './m-employee.service';

@Controller('m-employee')
export class MEmployeeController {
  constructor(private readonly employeeService: MEmployeeService) {}

  @Post()
  create() {
    return this.employeeService.createEmployee();
  }

  @Get()
  getAll() {
    return this.employeeService.findAll();
  }
}
