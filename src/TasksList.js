import React from 'react';
import Task from './Task';

const TasksList = ({ tasks, onDelete, onEdit }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
};

export default TasksList;