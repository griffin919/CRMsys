//Packages
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";


//modules
import generateToken from "../utils/jwt.js";

const registerUser = expressAsyncHandler( async (req, res, next) => {
    const {fname, lname, username,gender, email, password, role, jurisdiction, department} = req.body;

    //checking if an has already been created with the given email
    const emailExits = await User.findOne({email});
    const usernameExits = await User.findOne({username});

    if(emailExits || usernameExits){
        res.status(401);
        throw new Error("An account with your username or email already exits");
    } else{
        try {
            const user = await User.create({
                fname, lname, username, gender, email, password, role, jurisdiction, department
            })
            res.status(201).json({
                user
            })
        } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }
})

const loginUser = expressAsyncHandler( async (req, res, next) => {
    const {username, password} = req.body;

    const user = await User.findOne({username});

    if(user && await user.matchPassword(password)){
        generateToken(res, user._id);
        res.status(202).json({
            user
        });
    } else{
        res.status(403);
        throw new Error("Username or Password is incorrect");
    }
})

const getUser= expressAsyncHandler( async (req, res, next) => {
    res.send("get user");
})
const getAllUsers = expressAsyncHandler(async (req, res, next) => {
    try {
      const users = await User.find();
      
      res.json(users); // Send the fetched users as a JSON response
    } catch (err) {
      console.log("Something went wrong", err);
      res.status(500).json({ message: "Server error" }); // Handle the error and send an error response
    }
  });
// const getAllUsers = expressAsyncHandler( async (req, res, next) => {
//     User.find()
//     .then(()=>console.log("Request successfully served"))
//     .catch((err)=>console.log("Something went wrong", err))
// })

const updateUserByAdmin = expressAsyncHandler( async (req, res, next) => {
    const {fname, lname, username,gender, email, password, role, jurisdiction, department} = req.body; 
    
    const user = await User.findById(res.user._id);
    
    if(user){
        user.fname = fname || user.fname;
        user.lname = lname || user.lname;
        user.username = username || user.username;
        user.gender = gender || user.gender;
        user.email = email || user.email;
        user.role = role || user.role;
        user.jurisdiction = jurisdiction || user.jurisdiction;
        user.department = department || user.department;

        if(password) {
            user.password = password;
        }
        try {
            const updateUserProfile = await User.save();
            res.status(200).json({updateUserProfile});
        } catch (error) {
            throw new Error("User profile update failed");
        }
    }else{
        res.status(404).json('User not found!');
    }
})

const updateUserByUser = expressAsyncHandler( async (req, res, next) => {
    
    const {password, username} = req.body;
    const user = await User.findById(req.user._id);
    
    if(user){
        user.username = username || user.username;
        
        if(password) {
            user.password = password;
        }
        try {
            await user.save();
            res.status(200).json('Update successful');
        } catch (error) {
            throw new Error(error);
        }
    } else{
        res.status(404).json('User not found!');
    }
})

const logoutUser = expressAsyncHandler( async (req, res, next) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });

    res.status(200).json('Logout successful');
})

const deleteUser = expressAsyncHandler( async (req, res, next) => {
    res.send("delete user");
})

export {registerUser, 
    loginUser, 
    updateUserByAdmin, 
    updateUserByUser, 
    deleteUser, 
    getUser, 
    logoutUser, 
    getAllUsers,
}