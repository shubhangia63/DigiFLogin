
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS file

function RolesTable() {
  const [items, setItems] = useState([]);
  const [idCounter, setIdCounter] = useState(1); // Initialize counter to 1
  const [name, setName] = useState('');
  const [status, setStatus] = useState('active'); // Default to 'active'
  const [editIndex, setEditIndex] = useState(null);
  const [editId, setEditId] = useState('');
  const [editName, setEditName] = useState('');
  const [editStatus, setEditStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/items')
      .then(response => {
        setItems(response.data);
        // Find the maximum ID from existing items and set the counter to one more
        const maxId = response.data.reduce((max, item) => Math.max(max, item.id), 0);
        setIdCounter(maxId + 1);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddItem = () => {
    axios.post('http://localhost:5000/items', { id: idCounter, name, status })
      .then(() => {
        setItems([...items, { id: idCounter, name, status }]);
        setName('');
        setStatus('active'); // Reset status to 'active' after adding
        setIdCounter(idCounter + 1); // Increment the counter
      })
      .catch(error => {
        console.error('Error adding item:', error);
      });
  };

  const handleEditItem = (index) => {
    setEditIndex(index);
    setEditId(items[index].id);
    setEditName(items[index].name);
    setEditStatus(items[index].status);
  };

  const handleUpdateItem = () => {
    axios.put(`http://localhost:5000/items/${editIndex}`, { id: editId, name: editName, status: editStatus })
      .then(() => {
        const updatedItems = [...items];
        updatedItems[editIndex] = { id: editId, name: editName, status: editStatus };
        setItems(updatedItems);
        setEditIndex(null);
        setEditId('');
        setEditName('');
        setEditStatus('');
      })
      .catch(error => {
        console.error('Error updating item:', error);
      });
  };

  const handleDeleteItem = (index) => {
    axios.delete(`http://localhost:5000/items/${index}`)
      .then(() => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Roles</h1>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="form">
        <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <select className="select" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button className="button" onClick={handleAddItem}>Add New</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>
                <button className="edit-button" onClick={() => handleEditItem(index)}>Edit</button>
                <button className="delete-button" onClick={() => handleDeleteItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editIndex !== null && (
        <div>
          <input type="text" className="edit-input" value={editId} onChange={(e) => setEditId(e.target.value)} />
          <input type="text" className="edit-input" value={editName} onChange={(e) => setEditName(e.target.value)} />
          <select className="edit-input" value={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button className="update-button" onClick={handleUpdateItem}>Update</button>
          <button className="cancel-button" onClick={() => setEditIndex(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default RolesTable;
