import React, { useState } from 'react';
import TodoRow from './components/ToDoRow';
import Button from './components/Button';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim() === '') return;
    const newTodo = { id: Date.now(), text: newTodoText, completed: false };
    setTodos([newTodo, ...todos]);
    setNewTodoText('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleInputChange = (e) => {
    setNewTodoText(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className='todo-wrapper'>
      <h1>Todo</h1>
      {todos.slice(0).reverse().map((todo) => (
        <TodoRow className="todo-row" key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
      ))}
        
        <div>
        <input className="todo-input"
          type="text"
          value={newTodoText}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          placeholder="Add Task Here..."
        />
        <span> 
        <Button className='button big' variant="big" onClick={handleAddTodo}>Add</Button>
        </span> 
        </div>
      
    </div>
  );
};

export default App;