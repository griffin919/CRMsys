//packages
import jwt from 'jsonwebtoken'
import expressAsyncHandler from 'express-async-handler';

//modules
import User from '../models/userModel.js';

const protect = expressAsyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      throw new Error('Unauthorized, token not found');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select('-password');
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

const adminAuth = expressAsyncHandler(async (req, res, next) => {

  if (req.user.role == 'admin') {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized user' });
  }
});


export {protect, adminAuth};

