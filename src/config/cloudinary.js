// Require the cloudinary library
const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
    cloud_name: 'dh2ialpow',
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: '975957685279493',
});


module.exports = cloudinary;