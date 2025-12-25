import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Project {
  @Prop({ required: true })
  title: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Developer' }] })
  developers: Types.ObjectId[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
