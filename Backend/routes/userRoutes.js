import express from 'express';
import {
    authUser,
    logoutUser,
    getUserProfile,
    registerUser,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
} from "../controller/userController.js";
import { protect, admin } from '../middlewares/authMiddleware.js';
// These are the middle we created in order to get a protected route for cookie and also for admin authorisation.
// To implement these middlewares we nee to add protect (if we want to make that route protected) or admin (if we want to make that route accesible only to admin) or bot in the specific functions in the routes below such as put,get,delete etc.

const router = express.Router(); // Create a router object

router.route('/').get(protect, admin, getUsers).post(registerUser); // Create a route for getting all users and creating a new user
router.post('/logout', logoutUser), // Create a route for logging out a user
router.post('/login', authUser); // Create a route for logging in a user
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile); // Create a route for getting and updating user profile
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser); // Create a route for deleting, getting and updating a user

export default router;