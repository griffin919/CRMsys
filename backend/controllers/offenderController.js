import dayjs from "dayjs";

//Packages
import expressAsyncHandler from "express-async-handler";
import Offender from "../models/offenderModel.js";

import fs from 'fs';

const addOffender = expressAsyncHandler( async (req, res, next) => {
    console.log('req.file', req.file)

    const formTextData = req.body ;
    const formFileData = req.file;
    
    const parsedData = {};
    for (const key in formTextData) {
        parsedData[key] = JSON.parse(formTextData[key]);
    }

    // console.log('parsed data', parsedData);

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
       const formTextData = req.body ;
       const formFileData = req.file;
       
       const parsedData = {};
       for (const key in formTextData) {
           parsedData[key] = JSON.parse(formTextData[key]);
        }
        
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

const searchRecords = expressAsyncHandler(async (req, res, next) => {
    const searchQuery = req.params.searchQuery;
  
    try {
      let searchResults = [];
  
      // Attempt to parse searchQuery as a date
    const searchDate = new Date(searchQuery);
    //   console.log('searchQuery: ', searchQuery);
    //   console.log('searchDate: ', searchDate);
      // If the parsed date is valid, search by date
      if (!isNaN(searchDate.getTime())) {
        searchResults = await Offender.find({
          "personalInformation.dateOfBirth": searchDate,
        });
      } else {
        // If it's not a valid date, search by fname and lname
        searchResults = await Offender.find({
          $or: [
            { "personalInformation.fname": { $regex: new RegExp(searchQuery, "i") } },
            { "personalInformation.lname": { $regex: new RegExp(searchQuery, "i") } },
          ],
        });
      }
  
      res.status(200).json({ success: true, data: searchResults });
    } catch (error) {
      console.error("Something went wrong", error);
      res.status(500).json({ success: false, error: "Something went wrong" });

    }
  });

const getImgNamesArr = expressAsyncHandler( async (req, res, next) => {
  const publicFolderPath = './backend/public/uploads'; // Update to your public folder path
  fs.readdir(publicFolderPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error fetching image names' });
    } else {
     
      const imageNames = files.filter(fileName => fileName.endsWith('.jpg')); // Filter for image files
      // console.log('imageNames:', imageNames);
      res.json(imageNames);
    }
  });
})

export {
    addOffender,
    getOffenderinfo,
    deleteOffenderinfo, 
    getOffenderProfile,
    updateOffenderInfo,
    searchRecords,
    // photoRecognition,
    getImgNamesArr,
}