//packages
import express from 'express';

//modules
import { registerUser, getUser, loginUser, updateUser,deleteUser } from '../controllers/userController.js';

//mounts
const userRouter = express.Router();

//desc      create new user account
//route     user/api/register
//access    Protected
userRouter.route('/register')
.post(registerUser)

//desc      login
//route     user/api/login
//access    Public
userRouter.route('/login')
.post(loginUser)

//desc      update user account
//route     user/api/login
//access    Protected
userRouter.route('/profile')
.get(getUser)
.put(updateUser)
.delete(deleteUser)

export default userRouter;