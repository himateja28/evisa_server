const cloudinary = require('cloudinary').v2;
          
cloudinary.config({ 
  cloud_name: 'dfoietygj', 
  api_key: process.env.CLOUDINARY_API, 
  api_secret: process.env.CLOUDINARY_API_SECRECT_KEY 
});
