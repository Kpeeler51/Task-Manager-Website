import React, { useState } from 'react';
import './TaskForm.css';

// Define the type and structure for the tasks.
interface Task {
  task: string;
  desc: string;
  completed: boolean;
}

// Define the props for the TaskForm component.
interface TaskFormProps {
  onAddTask: (newTask: Task) => void; // Function to add a new task
}

// Taskform Component renders a form for adding new tasks.
export default function TaskForm({ onAddTask }: TaskFormProps) {
  // State to manage the new task being created
  const [newTask, setNewTask] = useState<Task>({ task: '', desc: '', completed: false });

  // Handle changes in the input fields.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask(prevTask => ({ ...prevTask, [name]: value }));
  };

  // Handle form submission. Validates the form and adds the new task if valid.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask.task && newTask.desc) {
      onAddTask(newTask);
      // Resets form after submission.
      setNewTask({ task: '', desc: '', completed: false });
    }
  };

  return (
    // Input field for task name
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
      {/* Input field for task description */}
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
      {/* Submit Button */}
      <button className='task-button' type="submit">Add Task</button>
    </form>
  );
}
