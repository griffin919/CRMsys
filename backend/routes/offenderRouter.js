//Packages
import express from 'express';

//Modules
import { addOffender, updateOffenderInfo, getOffenderinfo } from '../controllers/offenderController.js';

//Mounts
const offenderRouter = express.Router();

//desc      add new offender
//route     offender/api/add
//access    Protected
offenderRouter.route('/add')
.post(addOffender)

//desc      manage offender profile
//route     offender/api/profile
//access    Protected
offenderRouter.route('/profile')
.get(getOffenderinfo)
.put(updateOffenderInfo)


export default offenderRouter;