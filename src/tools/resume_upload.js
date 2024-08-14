const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "/var/www/organized.mpengs.com/public/resumes/");
    },
    filename: function(req, file, cb) {
        cb(null, req.body.phone + '_' + path.extname(file.originalname));
    }
})

let upload = multer({ storage: storage })

module.exports = upload;
