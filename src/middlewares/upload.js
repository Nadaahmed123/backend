const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Append timestamp to the original file name
  }
});

const upload = multer({ storage: storage });

module.exports = upload.single('file'); // Exports middleware for single file upload with field name 'file'