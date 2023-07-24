import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'backend/public/uploads')
    },
    filename: function (req, file, cb) {
      const originalFileName = file.originalname;
      cb(null, originalFileName + '-' + Date.now() + path.extname(originalFileName));
    }
  });


const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
  

const upload = multer({ storage, fileFilter })

export default upload;