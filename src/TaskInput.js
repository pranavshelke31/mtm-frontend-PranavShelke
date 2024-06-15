import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      setError(true);
    } else {
      onAddTask(task);
      setTask('');
      setError(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
      {error && <div style={{ color: 'ed' }}>Please enter a task</div>}
    </form>
  );
};

export default TaskInput;