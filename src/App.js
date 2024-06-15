import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, { id: tasks.length + 1, name: newTask, completed: false }]);
    setNewTask('');
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id!== id));
  };

  const handleEdit = (id, newName) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {...task, name: newName };
        }
        return task;
      })
    );
  };

  return (
    <div className="container">
      <h1 className="my-4">Itinerary Planner</h1>
      <TaskInput
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <TasksList tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
}

function TaskInput({ newTask, setNewTask, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="taskInput">Task</label>
        <input
          type="text"
          className="form-control"
          id="taskInput"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}

function TasksList({ tasks, handleDelete, handleEdit }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{task.name}</h5>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleEdit(task.id, prompt('Enter new task name:'))}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </div>
          
        </li>
      ))}
    </ul>
  );
}

export default App;