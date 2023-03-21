const express = require('express');
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, liketheBlog, disliketheBlog  } = require('../controller/blogCtrl');
const { uploadImages } = require('../controller/productCtrl');
const { authMiddleware, isAdmin} = require('../middlewares/authMiddleware');
const { blogImgResize, uploadPhoto } = require('../middlewares/uploadimages');
const router = express.Router();



router.post('/', authMiddleware, isAdmin, createBlog);
router.put(
    '/upload/:id', 
    authMiddleware, 
    isAdmin, 
    uploadPhoto.array('images', 2),
    blogImgResize,
    uploadImages
    );
router.put('/:id', authMiddleware, isAdmin, updateBlog);
router.put('/likes',authMiddleware, liketheBlog);
router.put('/dislikes',authMiddleware, disliketheBlog);
router.get('/:id', getBlog);
router.get('/', getAllBlogs);
router.delete('/:id', authMiddleware, isAdmin, deleteBlog);

module.exports = router;