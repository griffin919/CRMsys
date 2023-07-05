//Packages
import expressAsyncHandler from "express-async-handler";

const addOffender = expressAsyncHandler( async (req, res, next) => {
    res.send("add offender")
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