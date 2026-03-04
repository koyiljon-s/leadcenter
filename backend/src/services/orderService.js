import orderRepository from '../repositories/orderRepository.js';

const orderService = {
    createOrder: async ({ full_name, phone_number}) => {
        if (!full_name || !phone_number) {
            throw new Error("full_name and phone_number are required");
        }
     
        return await orderRepository.create({
            full_name,
            phone_number
        });
    },
    
    findAllProducts: async () => {
        return await orderRepository.findAll();
    },
    
    findById: async (id) => {
        const order = await orderRepository.findById(id);
        if (!order) {
            throw new Error("Order not found");
        }
        return order;
    },

    updateOrder: async (id, { full_name, phone_number }) => {
        const existingOrder = await orderRepository.findById(id);
        if (!existingOrder) {
            throw new Error("Order not found");
        }

        return await orderRepository.update(id, {
            full_name: full_name ?? existingOrder.full_name,
            phone_number: phone_number ?? existingOrder.phone_number
        });
    },

    deleteOrder: async (id) => {
        const existingOrder = await orderRepository.findById(id);
        if (!existingOrder) {
            throw new Error("Order not found");
        }
        return await orderRepository.delete(id);
    },
};

export default orderService;
