import jwt from "jsonwebtoken";

function generateToken(res, userId) {
    
    const token = jwt.sign({ userId }, process.env.JWT_SECRET , { expiresIn: '15m'});

    res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production' ? true : false,
        maxAge: 1000 * 60 * 15,
    });
};

export default generateToken;