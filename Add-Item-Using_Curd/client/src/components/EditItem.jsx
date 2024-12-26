import React, { useState, useEffect } from 'react';
import { getItem, updateItem } from '../services/itemService';
import { useParams, useNavigate } from 'react-router-dom';
import './EditItem.css';

const EditItem = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const navigate = useNavigate(); // For navigation after update

  const [formData, setFormData] = useState({
    itemName: '',
    price: '',
    description: '',
    img: null, // Optional image field
  });

  const [originalData, setOriginalData] = useState(null); // Store original data for comparison

  // Fetch the existing item data for editing
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await getItem(id);
        setOriginalData(data); // Store the original data
        setFormData({
          itemName: data.itemName || '',
          price: data.price || '',
          description: data.description || '',
          img: null, // No pre-fill for the image
        });
      } catch (err) {
        console.error('Error fetching item:', err);
        alert('Failed to fetch item details.');
      }
    };

    fetchItem();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'img') {
      setFormData({ ...formData, img: files[0] }); // Handle file input for images
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Check if any field has changed compared to the original data
  const isFormDataChanged = () => {
    return (
      formData.itemName !== originalData.itemName ||
      formData.price !== originalData.price ||
      formData.description !== originalData.description ||
      formData.img !== null // Image change is considered
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormDataChanged()) {
      alert('Please make at least one change to update the item.');
      return; // Prevent submission if no changes were made
    }

    const updatedData = new FormData();
    updatedData.append('itemName', formData.itemName);
    updatedData.append('price', formData.price);
    updatedData.append('description', formData.description);

    // Append the image if it was updated
    if (formData.img) {
      updatedData.append('img', formData.img);
    }

    try {
      await updateItem(id, updatedData); // Update the item using the service
      alert('Item updated successfully!');
      navigate('/'); // Redirect to the home page
    } catch (err) {
      console.error('Error updating item:', err);
      alert('Failed to update item.');
    }
  };

  // Back button handler
  const handleBack = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div>
      <button onClick={handleBack} className="back-button">Back</button>
      <form onSubmit={handleSubmit} className="edit-item-form">
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          placeholder="Item Name"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="file"
          name="img"
          onChange={handleChange}
        />
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default EditItem;
