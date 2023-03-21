const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dawbmetmh",
  api_key: "961327769957826",
  api_secret: "39L4mlo-13afkKkCm4wBP3OTkLk",
});

const cloudinaryUploadImg = async (filetoUploads) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(filetoUploads, (result) => {
      resolve({
        url: result.secure_url,
      }, {
        resource_type:"auto",
      });
    });
  });
};


module.exports = cloudinaryUploadImg;
