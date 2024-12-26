import React, { useEffect, useState } from 'react';
import { getItems, deleteItem } from '../services/itemService';
import ItemCard from './ItemCard';
import { useNavigate } from 'react-router-dom';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await getItems();
        setItems(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter((item) => item._id !== id));
      // alert('Item deleted successfully!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <button 
        style={{
          padding: '10px 20px',
          backgroundColor: 'purple',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
        onClick={() => navigate('/addItem')}
      >
        Add New Item
      </button>

      <div>
        {items.map((item) => (
          <ItemCard key={item._id} item={item} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
