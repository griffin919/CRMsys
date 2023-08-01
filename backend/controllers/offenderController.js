//Packages
import expressAsyncHandler from "express-async-handler";
import Offender from "../models/offenderModel.js";

const addOffender = expressAsyncHandler( async (req, res, next) => {
    // console.log('req.body', req.body)
    console.log('req.file', req.file)

    const formTextData = req.body ;
    const formFileData = req.file;
    
    const parsedData = {};
    for (const key in formTextData) {
        parsedData[key] = JSON.parse(formTextData[key]);
    }

    console.log('parsed data', parsedData);

    const fullOffenderData =  formFileData
    ? {
        ...parsedData,
        personalInformation: {
            ...parsedData.personalInformation,
          photo: formFileData.filename,
        },
      }
    : parsedData
    
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
    // console.log('req.body in update', req.body.data)
    // console.log('req.body.data type: ', typeof(req.body.data));
    // console.log('req.file in update', req.file)
    // console.log('req: ', req);

       const formTextData = req.body ;
       const formFileData = req.file;
       
       const parsedData = {};
       for (const key in formTextData) {
           parsedData[key] = JSON.parse(formTextData[key]);
        }
        
    //     console.log('formFileData: ', formFileData);
       const fullOffenderData =  formFileData
       ? {
           ...parsedData,
           personalInformation: {
               ...parsedData.personalInformation,
             photo: formFileData.filename,
           },
         }
       : parsedData

           try {
               const offenderData = await Offender.findByIdAndUpdate(req.params.id, fullOffenderData)
               res.status(201).json(offenderData);
            //    console.log('offenderData update: ', offenderData);
       
           } catch (error) {
               res.status(400);
               throw new Error(error);
           }
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
    // try {
    //     const record = await Offender.findById(req.params.id)
    //     res.status(201).json(record);
    //     console.log("Record fetched");
    // } catch (error) {
    //     res.status(400);
    //     throw new Error(error);
    // }
});
const deleteOffenderinfo = expressAsyncHandler( async (req, res, next) => {
    
    try {
        const delRes = await Offender.findByIdAndDelete(req.params.id)
        res.status(200).send(delRes) 
    } catch (error) {
        console.log("Something went wrong", error);
    }
});

export {
    addOffender,getOffenderinfo,deleteOffenderinfo, getOffenderProfile,updateOffenderInfo
}