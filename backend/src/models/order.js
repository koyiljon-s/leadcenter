// src/models/order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    full_name: { 
        type: String, 
        required: true 
    },
    phone_number: { 
        type: String, 
        required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
