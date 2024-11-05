import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


export const uploadImage = async (localFilePath) => {
  try {
    if (!localFilePath) return null
    const response = await cloudinary.uploader.upload(imagePath, { resource_type: "auto" })
    console.log('file uploaded on cloudinary', response.url)
    return response
  } catch {
    fs.unlinkSync(localFilePath) // remove the locally save temporay file as the upload operation got failed
    return null

  }
}