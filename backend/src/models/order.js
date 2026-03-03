// models/Order.js

const mongoose = require("mongoose");

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

module.exports = mongoose.model("Order", orderSchema);
