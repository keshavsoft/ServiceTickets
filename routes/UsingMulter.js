import multer from 'multer';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("bbbbbbbb : ", file, req.body);
        cb(null, "Uploads");

    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}.jpg`);
    }
});

var StartFunc = multer({ storage: storage });

export { StartFunc };
