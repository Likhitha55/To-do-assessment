import React, { useState } from 'react';
import Checkbox from './CheckBox';
import Button from './Button';
import './ToDoRow.css';

const TodoRow = ({ todo, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCheckboxChange = (checked) => {
    const updatedTodo = { ...todo, completed: checked };
  };
  return (
    <div className="todo-row"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Checkbox className="todo-checkbox" label={todo.text} checked={todo.completed} onChange={handleCheckboxChange} />

      {/* <span className="todo-text">{todo.text}</span> */}

      {isHovered && (
        <Button className="delete-button button small" variant="small" onClick={() => onDelete(todo.id)}>
          &times;
        </Button>
      )}
    </div>
  );
};

export default TodoRow;