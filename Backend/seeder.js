import mongoose from "mongoose";
import dotenv from "dotenv";
import  colors from "colors";
import products from "./Data/products.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import users from "./Data/users.js";
import connectDB from "./config/db.js";

dotenv.config(); //Loads .env file contents into process.env by default. If DOTENV_KEY is present, it smartly attempts to load encrypted .env.vault file contents into process.env.
connectDB();

const importData = async () => {
    try {
        await Product.deleteMany();
        await Order.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return {
            ...product, // Spread the existing product properties
            user: adminUser, // Add the user field to the product
            reviews: product.reviews.map((review) => {
                return {
                  ...review, // Spread the existing review properties
                  user: adminUser, // Add the user field to each review
                };
            }),
            };
        });

        

        // const sampleReviews = products.reviews.map((review) => {
        //     return {...review, user:createdUsers[1]};
        // });

        // console.log(sampleReviews);
        
        // console.log(`${sampleRev}`);

        await Product.insertMany(sampleProducts);
        console.log('Data Inserted'.green.inverse);

        process.exit();
    } catch (error) {
        console.log(`Error Occured: ${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try{
        await Product.deleteMany();
        await Order.deleteMany();
        await User.deleteMany();

        console.log("Data Destroyed".green.inverse);
        process.exit();
    }

    catch(error){
        console.log(`Error Occured in destroying data: ${error}`.red.inverse);
        process.exit(1);
    }
}


if(process.argv[2] == '-d'){
    destroyData();
}
else{
    importData();
}
