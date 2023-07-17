const NotFound = (req, res, next) => {
    res.status(404);
    const error = new Error(`${req.originalUrl} not found`);
    next(error);
}

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 400 : res.statusCode;
    let message = err.message;

    if(err.name == 'CastError' && err.kind == 'Objectid'){
        message = 'Resource not found';
        statusCode = 404;
    };

    res.status(statusCode).json({
        message,
        "stack": process.env.NODE_ENV === "production" ? null : err.stack,
    })
}

export {NotFound, errorHandler}