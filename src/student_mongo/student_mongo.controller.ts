import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentMongoService } from './student_mongo.service';
import { Student } from './student_mongo.schema';

@Controller('student-mongo')
export class StudentMongoController {
  constructor(private readonly studentService: StudentMongoService) {}

  @Post()
  async addStudent(@Body() data: Partial<Student>) {
    return this.studentService.createStudent(data);
  }

  @Get()
  async getStudents() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  async getStudentById(@Param('id') id: string) {
    return this.studentService.getStudentById(id);
  }
}
