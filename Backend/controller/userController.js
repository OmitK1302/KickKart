import User from '../models/userModel.js';
import asyncHandler from '../middlewares/asynchHandler.js'; // This is a custom middleware that we created to handle async functions.
// import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';

// import bcrypt from 'bcryptjs';


// @desc   AUTH USER & GET TOKEN
// @route  POST /api/users/login
// @access PUBLIC
const authUser = asyncHandler(async(req, res) => {
    // console.log(req.body); // This will not log anything on the console until we add a middleware for parsing the data. req.body returns the value passed in the body while performing requrest on the url. Can be tested using postman.
    // To read the req.body. We need to add a middleware for parsing data. This can be done by adding the below lines to the server.js file(entry point for backend).
        // app.use(express.json());
        // app.use(express.urlencoded({extended: true}));
    
    
    const {email, password} = req.body;
    const user = await User.findOne({email: email}); // finds the user with the email got from req.body.

    
    // If there is a user then we will send the id, name, email and isAdmin as a response
    //     if (user && bcrypt.compare(password, user.password)){  // We can directly compare the hashes of the password here but doing in the user schema or model file will make it more relevant.
    // Here we are using the added method in the user model which we are awaiting as its async function.
    if (user && (await user.matchPassword(password))){
        // const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '30d'}); // jwt.sign() mehtod is used to create a jwt token which takes three parameters i.e. 1.payload: the data i want to send, 2.a secret, 3.time in which it expires(here it is 30 days).
    
        // // Set JWT as HTTP-Only cookie (it takes three parameters: 1.name of the cookie, 2. value of the cookie, 3.options)
        // res.cookie('jwt', token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV !== 'development',
        //     sameSite: 'Strict',
        //     maxAge: 30 * 24 * 60 * 60 * 1000, // This takes time in ms therefore for it to be 30 days it will be this.
        // })

        generateToken(res, user._id);

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    }
    // else we will send the invalid user and password message.
    else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
    
    // res.send("Login");
});

// @desc   REGISTER A NEW USER
// @route  POST /api/users
// @access PUBLIC
const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body;

    const userExist = await User.findOne({email: email});

    if(userExist){
        res.status(400);
        throw new Error("User already exist.");
    }
    
    const user = await User.create({
        name: name,
        email: email,
        password: password,
    });

    if(user) {
        generateToken(res, user._id);
        
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    }
    else{
        res.status(400);
        throw new Error('Invalid user data');
    }

    // res.send("Register a user");
});

// @desc   GET USER PROFILE
// @route  GET /api/users/profile
// @access PRIVATE
const getUserProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id);

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    }
    else{
        res.status(404);
        throw new Error("User not found.")
    }
    // res.send("Get User Profile");
});

// @desc   UPDATE USER PROFILE
// @route  PUT /api/users/profile
// @access PRIVATE
const updateUserProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id);

    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        // We only want to mess with the password if its updated as it is hashed in the databse
        if(req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save(); // To save the changes in the data and also it returns the user saved.

        res.status(201).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
        });
    }

    else{
        res.status(404);
        throw new Error("User not found");
    }
});

// @ desc LOGOUT USER / CLEAR COOKIE
// @ route GET /api/users/logout
// @ access PRIVATE
const logoutUser = asyncHandler(async(req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });

    res.status(200).json({message: "Logged out successfully"});
    // res.send("Logout User");
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

