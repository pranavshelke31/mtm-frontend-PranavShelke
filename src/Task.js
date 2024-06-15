import React, { useState } from 'react';

const Task = ({ task, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(newTask);
    setEditing(false);
  };

  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <li>
      {editing? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onBlur={handleSave}
        />
      ) : (
        <span>{task}</span>
      )}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Task;