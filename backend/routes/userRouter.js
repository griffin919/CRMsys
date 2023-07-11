//packages
import express from 'express';

//modules
import { registerUser, getUser, getAllUser, loginUser, updateUserByAdmin, updateUserByUser,deleteUser, logoutUser } from '../controllers/userController.js';
import { protect, adminAuth} from '../middleware/authTokenMidware.js';

//mounts
const userRouter = express.Router();

//desc      create new user account
//route     user/api/register
//access    Protected
userRouter.route('/register')
.post(protect, registerUser)

//desc      login
//route     user/api/login
//access    Public
userRouter.route('/login')
.post(loginUser)


//desc      logout
//route     user/api/logout
//access    Public
userRouter.route('/logout')
.post(logoutUser)

//desc      update user account
//route     user/api/profile
//access    Protected
userRouter.route('/profile')
.get(protect, getUser)
.put(protect, updateUserByUser)

//desc      update user account by admin
//route     user/api/profile/:admin
//access    Protected
userRouter.route('/profile/:id')
.put(protect,  updateUserByAdmin)
.get(protect, getUser)
.delete(protect, deleteUser)

//desc      get all users
//route     user/api/users
//access    Protected/admin
userRouter.route('/users')
.get(protect, adminAuth, getAllUser)



export default userRouter;