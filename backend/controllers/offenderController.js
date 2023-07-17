//Packages
import expressAsyncHandler from "express-async-handler";
import Offender from "../models/offenderModel.js";

const addOffender = expressAsyncHandler( async (req, res, next) => {
   
        try {
            const offenderData = await Offender.create(req.body)
            res.status(201).json(offenderData);
        } catch (error) {
            res.status(400);
            throw new Error(error);
        }

});

const updateOffenderInfo = expressAsyncHandler( async (req, res, next) => {
    res.send("update offender info")
});

const getOffenderinfo = expressAsyncHandler( async (req, res, next) => {
    res.send("get offender info")
});

export {
    addOffender,getOffenderinfo,updateOffenderInfo
}