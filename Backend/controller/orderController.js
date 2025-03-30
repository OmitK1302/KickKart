import Order from '../models/orderModel.js';
import asyncHandler from '../middlewares/asynchHandler.js';

// @desc  CREATE NEW ORDER
// Route  POST /api/orders
// access PRIVATE
const addOrderItems = asyncHandler(async(req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
    } = req.body;

    if(orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error("No Order Items");
    }

    else{
        const order = new Order({
            orderItems : orderItems.map((x) => ({
                 ...x,
                 product: x._id,
                 _id: undefined,
            })),
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemPrice,
            shippingPrice,
            taxPrice,
            totalPrice,

        });

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }

    
    // res.send("Add order item");
});


// @desc  GET LOGGED IN USER'S ORDER
// Route  GET /api/orders/myorders
// access PRIVATE
const getMyOrders = asyncHandler(async(req, res) => {
    // res.send("Get My Orders.");
    const order = await Order.find({user: req.user._id}).populate("user", "name, email");
    res.status(200).json(orders);

    if(order) {
        res.status(200).json(order);
    }
    else{
        res.status(404);
        throw new Error("Order not found");
    }
});


// @desc  GET ORDER BY ID
// Route  get /api/orders/:id
// access PRIVATE
const getOrderById = asyncHandler(async(req, res) => {
    // res.send("Get Order by Id");
    const order = await Order.findById(req.params.id);
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
