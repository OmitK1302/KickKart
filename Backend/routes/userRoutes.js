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

const router = express.Router(); // Create a router object

router.route('/').get(getUsers).post(registerUser); // Create a route for getting all users and creating a new user
router.post('/logout', logoutUser), // Create a route for logging out a user
router.post('/login', authUser); // Create a route for logging in a user
router.route('/profile').get(getUserProfile).put(updateUserProfile); // Create a route for getting and updating user profile
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser); // Create a route for deleting, getting and updating a user

export default router;