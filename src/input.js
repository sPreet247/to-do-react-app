import React from 'react';
import List from './list.js';
const Input = () => {
  return (
    <div>
      <h2>Enter a To-Do item</h2>
      <input type='text' placeholder='Enter a Task' />
      <List />
    </div>
  );
};

export default Input;
