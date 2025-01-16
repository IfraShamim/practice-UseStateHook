import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(''); // To track the input value
  const [items, setItems] = useState([]); // To track the list of items
  const [editIndex, setEditIndex] = useState(null); // To track which item is being edited

  const addItem = () => {
    if (inputValue.trim()) {
      if (editIndex !== null) {
        // Update the existing item
        setItems(items.map((item, index) => (index === editIndex ? inputValue.trim() : item)));
        setEditIndex(null); // Reset edit index
      } else {
        // Add new item to the list
        setItems([...items, inputValue.trim()]);
      }
      setInputValue(''); // Clear the input field
    }
  };

  const deleteItem = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete)); // Remove item by index
    if (editIndex === indexToDelete) {
      setEditIndex(null); // Reset edit index if deleted item was being edited
    }
  };

  const editItem = (indexToEdit) => {
    setInputValue(items[indexToEdit]); // Set input value to the item text
    setEditIndex(indexToEdit); // Set the index of the item being edited
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />&nbsp;&nbsp;&nbsp;
      <button onClick={addItem}>{editIndex !== null ? 'Update Item' : 'Add Item'}</button>

      <ul>
        {items.map((item, index) => (
          <p key={index}>
            {item}
            <button onClick={() => editItem(index)}>Edit</button> {/* Edit button */}
            <button onClick={() => deleteItem(index)}>Delete</button> {/* Delete button */}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default App;
