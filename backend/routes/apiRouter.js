//packages
import express from 'express';
import upload from '../utils/multer.js';

//modules
import { registerUser, getUser, getAllUser, loginUser, updateUserByAdmin, updateUserByUser,deleteUser, logoutUser } from '../controllers/userController.js';
import { protect, adminAuth} from '../middleware/authTokenMidware.js';
import { addOffender, getOffenderProfile, updateOffenderInfo, getOffenderinfo } from '../controllers/offenderController.js';

//mounts
const apiRouter = express.Router();

//desc      create new user account
//route     user/api/register
//access    Protected
apiRouter.route('/user/register')
.post(protect, registerUser)

//desc      login
//route     user/api/login
//access    Public
apiRouter.route('/user/login')
.post(loginUser)


//desc      logout
//route     user/api/logout
//access    Public
apiRouter.route('/user/logout')
.post(logoutUser)

//desc      update user account
//route     user/api/profile
//access    Protected
apiRouter.route('/user/profile')
.get(protect, getUser)
.put(protect, updateUserByUser)

//desc      update user account by admin
//route     user/api/profile/:admin
//access    Protected
apiRouter.route('/user/profile/:id')
.put(protect,  updateUserByAdmin)
.get(protect, getUser)
.delete(protect, deleteUser)

//desc      get all users
//route     user/api/users
//access    Protected/admin
apiRouter.route('/user/users')
.get(protect, adminAuth, getAllUser)

// OFFENDER Routes
//=====================================
//desc      add new offender
//route     offender/api/add
//access    Protected
apiRouter.route('/offender/add')
.post(protect, upload.single('photo'), addOffender)

//desc      manage offender profile
//route     offender/api/profile
//access    Protected
apiRouter.route('/offender/record/:id')
.put(protect,upload.single('photo'), updateOffenderInfo)

//desc      manage offender profile
//route     offender/api/profile
//access    Protected
apiRouter.route('/offender/records')
.get(protect, getOffenderinfo)


export default apiRouter;