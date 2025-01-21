import React, { useState } from 'react';

interface Task {
  task: string;
  desc: string;
}

interface TaskFormProps {
  onAddTask: (newTask: Task) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [newTask, setNewTask] = useState<Task>({ task: '', desc: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask(prevTask => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask.task && newTask.desc) {
      onAddTask(newTask);
      setNewTask({ task: '', desc: '' });
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={newTask.task}
        onChange={handleInputChange}
        placeholder="Enter task name"
        required
      />
      <input
        type="text"
        name="desc"
        value={newTask.desc}
        onChange={handleInputChange}
        placeholder="Enter task description"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
