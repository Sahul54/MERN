import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import { addItem } from '../services/itemService';
import './AddItem.css';  // Import the CSS file

const AddItem = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    price: '',
    description: '',
    img: null,
  });

  const navigate = useNavigate();  // Initialize navigate

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'img') {
      setFormData({ ...formData, img: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('itemName', formData.itemName);
    data.append('price', formData.price);
    data.append('description', formData.description);
    if (formData.img) {
      data.append('img', formData.img);
    }

    try {
      console.log('Sending data:', formData); // Debugging log
      await addItem(data);
      // alert('Item added successfully!');
      navigate('/');  // Navigate to home page after successful item addition
    } catch (err) {
      console.error('Error during item addition:', err.response ? err.response.data : err);
      // alert('There was an error adding the item.');
    }
  };

  return (
    <div className="add-item-container">
      {/* Back Button */}
      <button 
        className="back-btn" 
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>

      <form className="add-item-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="itemName"
          placeholder="Item Name"
          value={formData.itemName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <input type="file" name="img" onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
