import orderService from "../services/orderService.js";

export const createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);
    return res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.findAllProducts();
    return res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await orderService.findById(req.params.id);
    return res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await orderService.updateOrder(req.params.id, req.body);
    return res.status(200).json({
      success: true,
      data: updatedOrder,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await orderService.deleteOrder(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Order deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
