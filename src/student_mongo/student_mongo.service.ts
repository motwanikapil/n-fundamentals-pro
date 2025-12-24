import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student_mongo.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentMongoService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async createStudent(data: Partial<Student>): Promise<Student> {
    const newStudent = new this.studentModel(data);
    return newStudent.save();
  }

  async getAllStudents(): Promise<Student[]> {
    return this.studentModel.find().exec(); // exec method to handle promises in a better way
  }

  async getStudentById(id: string): Promise<Student | null> {
    return this.studentModel.findById(id).exec(); // exec method to handle promises in a better way
  }
}
