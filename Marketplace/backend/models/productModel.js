import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    Artist: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    Size: { type: String, required: true },
    Shipment: { type: String, required: true },
    About: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;