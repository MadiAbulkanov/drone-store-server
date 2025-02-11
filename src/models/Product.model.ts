import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
  type: string;
  brand: string;
  image: string;
  topSeller: boolean;
  newProd: boolean;
  sale: boolean;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  brand: { type: String, required: true },
  image: { type: String, default: '' },
  topSeller: { type: Boolean, default: false },
  newProd: { type: Boolean, default: false },
  sale: { type: Boolean, default: false }
});

export const Product = mongoose.model<IProduct>('Drone', ProductSchema, 'drone');