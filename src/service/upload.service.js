const cloudinary = require('../config/cloudinary.js');

const uploadImageFromLocal = async ({ path, folderName, name}) => {
    try {
        const result = await cloudinary.uploader.upload(path, {
            public_id: name,
            folder: folderName
        });
        return {
            image_url: result.secure_url
        }
    } catch (err) {
        throw new Error('Could not upload image');
    }
}

const uploadMultipleImages = async ({ files, folderName, name}) => {
    try{
        const imagesToUpload = files.map( async (file, index) => {
            return await uploadImageFromLocal({
                path: file.path,
                name: `${name}-0${index}`,
                folderName: folderName
            });
        });
        return await Promise.all(imagesToUpload);
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    uploadImageFromLocal,
    uploadMultipleImages
}