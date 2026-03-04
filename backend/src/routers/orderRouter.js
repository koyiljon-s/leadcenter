import { Router } from 'express';
import { createOrder, deleteOrder, getAllOrders, getOrderById, updateOrder } from '../controller/orderController.js';

const router = Router();

router.post('/orders', createOrder);
router.get('/orders', getAllOrders);
router.get('/orders/:id', getOrderById);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

export default router;