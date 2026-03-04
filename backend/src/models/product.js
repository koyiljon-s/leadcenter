// src/models/Product.js
import mongoose from "mongoose";

const s3FileSchema = new mongoose.Schema(
  {
    key: { type: String, required: true }, 
    contentType: { type: String, required: true }, 
    size: { type: Number, required: true },
    originalName: { type: String, required: true },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },

    priceUZS: { type: Number, required: true, min: 0 },

    images: { type: [s3FileSchema], default: [] },

    isActive: { type: Boolean, default: true },
  },

  { timestamps: true }
  
);

export default mongoose.model("Product", productSchema);