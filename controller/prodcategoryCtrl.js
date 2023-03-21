const Category = require('../models/prodcategoryModel');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../util/validateMongodbId');
const { validate } = require('../models/userModel');


//Create Category
const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    }catch (error) {
        throw new Error(error);
    }
});

//Update Category
const updateCategory = asyncHandler(async (req, res) => {
    validateMongoDbId(id);
    const {id} = req.params;
    try {
        const updateCategory = await Category.findByIdAndUpdate(id, req.body,{ 
            new: true
        });
        res.json(updateCategory);
    }catch (error) {
        throw new Error(error);
    }
});

//delete category
const deleteCategory = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const deleteCategory = await Category.findByIdAndDelete(id);
        res.json(deleteCategory);
    }catch (error) {
        throw new Error(error);
    }
});

//Get Category
const getCategory = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const getaCategory = await Category.findById(id);
        res.json(getaCategory);
    }catch (error) {
        throw new Error(error);
    }
});

//Get All Category
const getallCategory = asyncHandler(async (req, res) => {
    try {
        const getallCategory = await Category.find();
        res.json(getallCategory);
    }catch (error) {
        throw new Error(error);
    }
});

module.exports = { createCategory, updateCategory, deleteCategory, getCategory, getallCategory };