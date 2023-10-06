//packages
import express from 'express';
import upload from '../utils/multer.js';

//modules
import { registerUser, getUser, getAllUsers, loginUser, updateUserByAdmin, updateUserByUser,deleteUser, logoutUser } from '../controllers/userController.js';
import { protect, adminAuth} from '../middleware/authTokenMidware.js';
import { addOffender, 
    getOffenderProfile,
    updateOffenderInfo,
     getOffenderinfo,
     deleteOffenderinfo, 
     searchRecords, 
     getImgNamesArr,
    } from '../controllers/offenderController.js';

//mounts
const apiRouter = express.Router();

//desc      create new user account
//route     api/users/register
//access    Protected
apiRouter.route('/user/register')
.post(protect, registerUser)

//desc      login
//route     api/users/login
//access    Public
apiRouter.route('/user/login')
.post(loginUser)


//desc      logout
//route     api/users/logout
//access    Public
apiRouter.route('/user/logout')
.post(logoutUser)

//desc      update user account
//route     api/user/profile
//access    Protected
// apiRouter.route('/user/profile')
// .get(protect, getUser)
// .put(protect, updateUserByUser)

//desc      update user account by admin
//route     api/user/profile/:admin
//access    Protected
apiRouter.route('/user/:id')
.put(protect,  updateUserByAdmin)
.get(protect, getUser)
.delete(protect, deleteUser)

//desc      get all users
//route     api/user/user
//access    Protected/admin
apiRouter.route('/user')
.get(protect, adminAuth, getAllUsers)


// OFFENDER Routes
//=====================================
//desc      add new offender
//route     offender/api/add
//access    Protected
apiRouter.route('/record/add')
.post(protect, upload.single('photo'), addOffender)

//desc      manage offender profile
//route     offender/api/profile
//access    Protected
apiRouter.route('/record/:id')
.put(protect,upload.single('photo'), updateOffenderInfo)
.delete(protect, deleteOffenderinfo)

//desc      manage offender profile
//route     offender/api/profile
//access    Protected
apiRouter.route('/record')
.get(protect, getOffenderinfo)

//desc      search Records
//route     offender/api/search
//access    Protected
apiRouter.route('/record/search/:searchQuery')
.get(protect, searchRecords)

//desc      get images names in array
//route     /record/images
//access    public
apiRouter.route('/record/imageslist')
.get(getImgNamesArr)

export default apiRouter;