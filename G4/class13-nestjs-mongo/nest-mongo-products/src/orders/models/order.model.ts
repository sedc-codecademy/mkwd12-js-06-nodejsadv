import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from 'src/products/models/product.model';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  name: string;

  @Prop()
  amount: number;

  @Prop()
  user: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  })
  products: Product[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
