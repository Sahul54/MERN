const express = require('express');
const router = express.Router();
const { uploadItemImage } = require('../controllers/itemController');
const { addItem, getItems, getItem, updateItem, deleteItem } = require('../controllers/itemController');

router.post('/addItem', uploadItemImage, addItem);
router.get('/getAllItems', getItems);
router.get('/getOneItem/:id', getItem);
router.put('/updateItem/:id', uploadItemImage, updateItem);
router.delete('/deleteItem/:id', deleteItem);

module.exports = router;
