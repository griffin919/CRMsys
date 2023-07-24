//Packages
import expressAsyncHandler from "express-async-handler";
import Offender from "../models/offenderModel.js";
import { response } from "express";

const addOffender = expressAsyncHandler( async (req, res, next) => {
    // console.log('req.body', req.body)
    console.log('req.file', req.file)

    const formTextData = req.body ;
    const formFileData = req.file;
    


    const parsedData = {};
    for (const key in formTextData) {
        parsedData[key] = JSON.parse(formTextData[key]);
    }

    // console.log('parsed data', parsedData);

    const fullOffenderData =  parsedData
    ? {
        ...parsedData,
        personalInformation: {
            ...parsedData.personalInformation,
          photo: formFileData.filename,
        },
      }
    : formTextData


    // console.log('fullOffenderData', fullOffenderData);
    
        try {
            const offenderData = await Offender.create(fullOffenderData)
            res.status(201).json(offenderData);
            console.log("Record added successfully");
        } catch (error) {
            res.status(400);
            throw new Error(error);
        }

});

const updateOffenderInfo = expressAsyncHandler( async (req, res, next) => {
    res.send("update offender info")
});

const getOffenderinfo = expressAsyncHandler( async (req, res, next) => {
    try {
        const records = await Offender.find();
        res.status(200).json( records);
    } catch (error) {
        res.status(400);
        throw new Error('Could not fetch records', error);
    }
});

const getOffenderProfile = expressAsyncHandler( async (req, res, next) => {
    res.send("get offender profile")
});

export {
    addOffender,getOffenderinfo,getOffenderProfile,updateOffenderInfo
}