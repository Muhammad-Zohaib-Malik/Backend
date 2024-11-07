import express from 'express'
import { registerUser } from '../controllers/user.controller.js'
const router = express.Router()
import { upload } from '../middlewares/multer.js'


router.route("/register").post(upload.fields([
  {
    name: "avatar",
    maxCount: 1
  },
  {
    name: "coverImage",
    maxCount: 1
  }
]), registerUser)


export default router