import {useState} from 'react';
import './Tasks.css'
import TaskContainer from "../TaskContainer/TaskContainer"
import TaskWindow from "../TaskWindow/TaskWindow"
import TaskForm from "../TaskForm/TaskForm"

interface Task {
  task: string;
  desc: string;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    {task:'chores', desc: 'take out trash'},
    {task: 'clean', desc: 'clean room'},
    {task: 'activity', desc: 'physical activity'},
  ]);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    console.log(`Task selected: ${task.task}`);
  };

  const handleAddTask = (newTask: Task) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <main className='taskpage'>
      <div className="tasktab">
      <TaskForm onAddTask={handleAddTask} />
      <TaskContainer tasks={tasks} onTaskClick={handleTaskClick} />
      </div>
      <TaskWindow selectedTask={selectedTask} />
    </main>
  )
}
