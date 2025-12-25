import { Module } from '@nestjs/common';
import { MEmployeeService } from './m-employee.service';
import { MEmployeeController } from './m-employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { Profile, ProfileSchema } from './schemas/profile.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: Profile.name, schema: ProfileSchema },
    ]),
  ],
  providers: [MEmployeeService],
  controllers: [MEmployeeController],
})
export class MEmployeeModule {}
