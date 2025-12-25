import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserMongoOneToOne } from './schemas/user-mongo-1-to-1.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserMongo1To1Service {
  constructor(
    @InjectModel(UserMongoOneToOne.name)
    private userModel: Model<UserMongoOneToOne>,
  ) {}

  async createUser(): Promise<UserMongoOneToOne> {
    const user = new this.userModel({
      name: 'Kapil Motwani',
      address: {
        street: '123',
        city: 'Vadodara',
      },
    });

    return user.save();
  }

  async findAll(): Promise<UserMongoOneToOne[]> {
    return this.userModel.find().exec();
  }
}
