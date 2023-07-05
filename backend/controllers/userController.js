//Packages
import expressAsyncHandler from "express-async-handler";

const registerUser = expressAsyncHandler( async (req, res, next) => {
    res.send("Register User");
})

const loginUser = expressAsyncHandler( async (req, res, next) => {
    res.send("login user");
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