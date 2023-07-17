import jwt from "jsonwebtoken";

function generateToken(res, userId) {
    
    const token = jwt.sign({ userId }, process.env.JWT_SECRET , { expiresIn: '1d'});

    res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production' ? true : false,
        maxAge: 1000 * 60 * 60 * 24,
    });
};

export default generateToken;