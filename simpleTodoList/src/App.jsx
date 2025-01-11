import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(''); // To track the input value
  const [items, setItems] = useState([]); // To track the list of items

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]); // Add new item to the list
      setInputValue(''); // Clear the input field
    }
  };

  const deleteItem = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete)); // Remove item by index
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />&nbsp;&nbsp;&nbsp;
      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button> {/* Delete button */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
