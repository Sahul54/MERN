import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import EditItem from './components/EditItem';
import "./App.css";

const App = () => (
  <Router>
    <h2>Item Management</h2>
    <Routes>
      <Route path="/" element={<ItemList />} />
      <Route path="/addItem" element={<AddItem />} />
      <Route path="/editItem/:id" element={<EditItem />} />
    </Routes>
  </Router>
);

export default App;
