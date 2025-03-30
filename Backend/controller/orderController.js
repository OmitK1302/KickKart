import Order from '../models/orderModel.js';
import asyncHandler from '../middlewares/asynchHandler.js';

// @desc  CREATE NEW ORDER
// Route  POST /api/orders
// access PRIVATE
const addOrderItems = asyncHandler(async(req, res) => {
    res.send("Add order item");
});


// @desc  GET LOGGED IN USER'S ORDER
// Route  GET /api/orders/myorders
// access PRIVATE
const getMyOrders = asyncHandler(async(req, res) => {
    res.send("Get My Orders.");
});


// @desc  GET ORDER BY ID
// Route  get /api/orders/:id
// access PRIVATE
const getOrderById = asyncHandler(async(req, res) => {
    res.send("Get Order by Id");
});


// @desc  UPDATE ORDER TO PAID
// Route  GET /api/orders/:id/pay
// access PRIVATE
const updateOrderToPaid = asyncHandler(async(req, res) => {
    res.send("Update Order to Paid");
});


// @desc  UPDATE ORDER TO DELIVERED
// Route  GET /api/orders/:id/deliver
// access PRIVATE/ADMIN
const updateOrderToDelivered = asyncHandler(async(req, res) => {
    res.send("Update Order to Delivered");
});


// @desc  GET ALL ORDERED
// Route  GET /api/orders
// access PRIVATE/ADMIN
const getOrders = asyncHandler(async(req, res) => {
    res.send("Get All Orders");
});


export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToDelivered,
    updateOrderToPaid,
    getOrders
};
