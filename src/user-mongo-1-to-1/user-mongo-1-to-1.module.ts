import { Module } from '@nestjs/common';
import { UserMongo1To1Service } from './user-mongo-1-to-1.service';
import { UserMongo1To1Controller } from './user-mongo-1-to-1.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserMongoOneToOne,
  UserMongoOneToOneSchema,
} from './schemas/user-mongo-1-to-1.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserMongoOneToOne.name,
        schema: UserMongoOneToOneSchema,
      },
    ]),
  ],
  providers: [UserMongo1To1Service],
  controllers: [UserMongo1To1Controller],
})
export class UserMongo1To1Module {}
