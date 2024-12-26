import React, { useEffect, useState } from 'react';
import { getItems, deleteItem } from '../services/itemService';
import ItemCard from './ItemCard';
import { useNavigate } from 'react-router-dom';
// import './ItemList.css'; // Import the CSS file for styling

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await getItems();
        setItems(data);
      } catch (err) {
        console.error('Error fetching items:', err);
        alert('Failed to fetch items. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter((item) => item._id !== id));
      alert('Item deleted successfully!');
    } catch (err) {
      console.error('Error deleting item:', err);
      alert('Failed to delete the item. Please try again.');
    }
  };

  if (loading) {
    return <p>Loading items...</p>;
  }

  return (
    <div className="item-list-container">
      {/* Add New Item Button */}
      <button 
        className="add-item-button" 
        onClick={() => navigate('/addItem')}
      >
        Add New Item
      </button>

      {/* Items List */}
      <div className="item-list">
        {items.length > 0 ? (
          items.map((item) => (
            <ItemCard key={item._id} item={item} onDelete={handleDelete} />
          ))
        ) : (
          <p className="no-items-message">No items available. Add a new item!</p>
        )}
      </div>
    </div>
  );
};

export default ItemList;
