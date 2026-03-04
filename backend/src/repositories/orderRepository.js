import Order from "../models/order.js";

const OrderRepository = {
  create: async (data) => {
    return await Order.create(data);
  },

  findAll: async (filter = {}) => {
    return await Order.find(filter).sort({ createdAt: -1 });
  },

  findById: async (id) => {
    return await Order.findById(id);
  },

  update: async (id, data) => {
    return await Order.findByIdAndUpdate(id, data, { new: true });
  },

  delete: async (id) => {
    return await Order.findByIdAndDelete(id);
  },
};

export default OrderRepository;
