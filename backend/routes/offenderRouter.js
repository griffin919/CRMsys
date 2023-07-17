// //Packages
// import express from 'express';

// //Modules
// import { addOffender, updateOffenderInfo, getOffenderinfo } from '../controllers/offenderController.js';
// import { protect } from '../middleware/authTokenMidware.js';

// //Mounts
// const offenderRouter = express.Router();

// //desc      add new offender
// //route     offender/api/add
// //access    Protected
// offenderRouter.route('/add')
// .post(protect, addOffender)

// //desc      manage offender profile
// //route     offender/api/profile
// //access    Protected
// offenderRouter.route('/profile/:id')
// .get(protect, getOffenderinfo)
// .put(protect, updateOffenderInfo)


// export default offenderRouter;