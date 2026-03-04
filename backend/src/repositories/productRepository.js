import Product from "../models/product.js";

const ProductRepository = {
  create: async (data) => {
    return await Product.create(data);
  },

  findAll: async (filter = {}) => {
    return await Product.find(filter).sort({ createdAt: -1 });
  },

  findById: async (id) => {
    return await Product.findById(id);
  },

  update: async (id, data) => {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  },

  delete: async (id) => {
    return await Product.findByIdAndDelete(id);
  },
};

export default ProductRepository;
