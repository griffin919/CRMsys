//Packages
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

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

    if(user){
        if(await bcrypt.compareSync(password, user.password)){
            res.status(202).json({
                user
            });
        } else{
            res.status(403);
            throw new Error("Username or Password is incorrect1")
        }
    } else{
        res.status(403);
        throw new Error("Username or Password is incorrect2")
    }
})

const getUser = expressAsyncHandler( async (req, res, next) => {
    res.send("get user");
})

const updateUser = expressAsyncHandler( async (req, res, next) => {
    res.send("update user");
})

const deleteUser = expressAsyncHandler( async (req, res, next) => {
    res.send("delete user");
})

export {registerUser, loginUser, updateUser, deleteUser, getUser}