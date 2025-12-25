import { Prop, Schema } from '@nestjs/mongoose';

// this is important so that our data goes in mongodb
@Schema()
export class Address {
  @Prop()
  street: string;

  @Prop()
  city: string;
}
