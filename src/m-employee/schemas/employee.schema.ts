import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MSchema } from 'mongoose';
import { Profile } from './profile.schema';

@Schema()
export class Employee extends Document {
  @Prop()
  name: string;

  @Prop({ type: MSchema.Types.ObjectId, ref: 'Profile' })
  profile: Profile;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
