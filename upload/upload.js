import {Router} from "express";
const router = Router();
import multer from "multer";
import path from "path";
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "profileImage");
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//       cb(null, file.fieldname + "-" + uniqueSuffix + ".png");
//     },
//   });
//   const upload = multer({ storage: storage });

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        // cb(null,path.join(__dirname,"../images"));
      cb(null, "images");

    },
    filename: function (req,file,cb){
        cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    }
});

const upload = multer({ storage });


// /api/upload
router.post("/", upload.single("image"), (req,res) => {
    res.status(200).json({message: "image uploaded"});
})


export default router;