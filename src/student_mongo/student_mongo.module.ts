import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentMongoSchema } from './student_mongo.schema';
import { StudentMongoService } from './student_mongo.service';
import { StudentMongoController } from './student_mongo.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Student.name,
        schema: StudentMongoSchema,
      },
    ]),
  ],
  providers: [StudentMongoService],
  controllers: [StudentMongoController],
})
export class StudentMongoModule {}
