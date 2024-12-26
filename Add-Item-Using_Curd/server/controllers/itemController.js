const multer = require('multer');
const path = require('path');
const Item = require('../models/Item');

// Set up Multer storage configuration
// Set up Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/'); // Store images in the 'uploads' folder
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Create unique filenames
    }
  });
  
  // Initialize Multer upload
  const uploadItemImage = multer({ storage: storage }).single('img');  // Ensure the field is named 'img'
  
  const addItem = async (req, res) => {
    const { itemName, price, description } = req.body;  // Extract the fields from req.body
    const img = req.file ? req.file.path : null; // Get the image path if it's uploaded
  
    // Validate required fields
    if (!itemName || !price || !description) {
      return res.status(400).json({ message: 'Item name, price, and description are required' });
    }
  
    try {
      const newItem = new Item({
        name: itemName,  // Ensure 'name' matches the model
        price,
        description,
        img,
      });
  
      await newItem.save();
      res.status(201).json(newItem);  // Respond with the new item data
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
//   module.exports = { uploadItemImage, addItem };

const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);  // Respond with the list of items
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const getItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);  // Respond with the item
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const updateItem = async (req, res) => {
    try {
        // If there's an image, handle it and store the URL
        let updatedData = { ...req.body };


        if (req.file) {
            updatedData.img = req.file.path; 
        }

        const item = await Item.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        res.status(200).json(item);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};



const deleteItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = { uploadItemImage, addItem, getItems, getItem, updateItem, deleteItem };
