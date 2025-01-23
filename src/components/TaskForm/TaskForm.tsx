import React, { useState } from 'react';
import './TaskForm.css';

interface Task {
  task: string;
  desc: string;
  completed: boolean;
}

interface TaskFormProps {
  onAddTask: (newTask: Task) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [newTask, setNewTask] = useState<Task>({ task: '', desc: '', completed: false });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask(prevTask => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask.task && newTask.desc) {
      onAddTask(newTask);
      setNewTask({ task: '', desc: '', completed: false });
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-field">
        <label>Task Name:
        <input
          className='task-input'
          type="text"
          name="task"
          value={newTask.task}
          onChange={handleInputChange}
          placeholder="Enter task name"
          size={50}
          required
        />
        </label>
      </div>
       <div className="input-field">
        <label> Task Description:
        <input
          className='task-input'
          type="text"
          name="desc"
          value={newTask.desc}
          onChange={handleInputChange}
          placeholder="Enter task description"
          size={55}
          required
        />
        </label>
      </div>
      <button className='task-button' type="submit">Add Task</button>
    </form>
  );
}
