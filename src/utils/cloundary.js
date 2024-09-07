import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configuration
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload an image
const uploadOnCloudinary = async (localFilepath) => {
  try {
    if (!localFilepath) {
      console.error('No file path provided for upload.');
      return null;
    }
    
    // Upload file on Cloudinary
    const response = await cloudinary.uploader.upload(localFilepath, {
      resource_type: 'auto', // Automatically detects the file type
    });

    // File has been uploaded successfully
    console.log('File uploaded to Cloudinary:', response.url);
   //fs.unlinkSync(localFilepath)
    return response;
  } catch (err) {
    // Remove the locally saved temporary file as the upload operation failed
    if (fs.existsSync(localFilepath)) {
      try {
        fs.unlinkSync(localFilepath);
        console.log(`Temporary file ${localFilepath} deleted.`);
      } catch (deleteErr) {
        console.error('Error deleting temporary file:', deleteErr);
      }
    }
    console.error('Error uploading to Cloudinary:', err);
    return null;
  }
};

export { uploadOnCloudinary };
