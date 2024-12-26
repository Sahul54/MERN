import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { addItem } from '../services/itemService';
import './AddItem.css'; // Import the CSS file

const AddItem = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    price: '',
    description: '',
    img: null, // Optional image field
  });

  const navigate = useNavigate(); // Initialize navigate

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'img') {
      setFormData({ ...formData, img: files[0] }); // Handle file input
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object for sending the data
    const data = new FormData();
    data.append('itemName', formData.itemName);
    data.append('price', formData.price);
    data.append('description', formData.description);
    if (formData.img) {
      data.append('img', formData.img); // Append the image file if provided
    }

    try {
      console.log('Submitting data:', formData); // Debugging log
      await addItem(data);
      alert('Item added successfully!');
      navigate('/'); // Navigate to home page after successful item addition
    } catch (err) {
      console.error('Error during item addition:', err.response ? err.response.data : err);
      alert('Failed to add the item. Please try again.');
    }
  };

  return (
    <div className="add-item-container">
      {/* Back Button */}
      <button 
        className="back-btn" 
        onClick={() => navigate('/')} 
        aria-label="Back to Home"
      >
        Back to Home
      </button>

      {/* Add Item Form */}
      <form className="add-item-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="itemName"
          placeholder="Item Name"
          value={formData.itemName}
          onChange={handleChange}
          required
          aria-label="Item Name"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          aria-label="Price"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          aria-label="Description"
        ></textarea>
        <input 
          type="file" 
          name="img" 
          onChange={handleChange} 
          aria-label="Upload Image (Optional)" 
        />
        <button type="submit" aria-label="Add Item">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
