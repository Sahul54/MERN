import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemCard.css';  // Import the CSS file

const ItemCard = ({ item, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="item-card">
      <img 
        src={`http://localhost:5000/${item.img}`}  // Assuming the image path is stored as 'img'
        alt={item.itemName} 
      />
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>

      <div className="button-container">
        <button 
          className="edit-btn"
          onClick={() => navigate(`/editItem/${item._id}`)}
        >
          Edit
        </button>

        <button 
          className="delete-btn"
          onClick={() => onDelete(item._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
