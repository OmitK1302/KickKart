import User from '../models/userModel.js';
import asyncHandler from '../middlewares/asynchHandler.js'; // This is a custom middleware that we created to handle async functions.

// @desc   AUTH USER & GET TOKEN
// @route  POST /api/users/login
// @access PUBLIC
const authUser = asyncHandler(async(req, res) => {
    res.send("Login");
});

// @desc   REGISTER A NEW USER
// @route  POST /api/users
// @access PUBLIC
const registerUser = asyncHandler(async(req, res) => {
    res.send("Register a user");
});

// @desc   GET USER PROFILE
// @route  GET /api/users/profile
// @access PRIVATE
const getUserProfile = asyncHandler(async(req, res) => {
    res.send("Get User Profile");
});

// @desc   UPDATE USER PROFILE
// @route  PUT /api/users/profile
// @access PRIVATE
const updateUserProfile = asyncHandler(async(req, res) => {
    res.send("Update User Profile");
});

// @ desc LOGOUT USER / CLEAR COOKIE
// @ route GET /api/users/logout
// @ access PRIVATE
const logoutUser = asyncHandler(async(req, res) => {
    res.send("Logout User");
});

// @desc GET ALL USERS
// @route GET /api/users
// @access PRIVATE/ADMIN
const getUsers = asyncHandler(async(req, res) => {
    res.send("Get all users");
});

// @desc DELETE USER
// @route DELETE /api/users/:id
// @access PRIVATE/ADMIN
const deleteUser = asyncHandler(async(req, res) => {
    res.send("Delete User");
});

// @desc GET USER BY ID
// @route GET /api/users/:id
// @access PRIVATE/ADMIN
const getUserById = asyncHandler(async(req, res) => {
    res.send("Get User by ID");
});

// @desc UPDATE USER
// @route PUT /api/users/:id
// @access PRIVATE/ADMIN
const updateUser = asyncHandler(async(req, res) => {
    res.send("Update User");
});

export {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    logoutUser,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
}

