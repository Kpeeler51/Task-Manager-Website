import {useState} from 'react';
import './Tasks.css'
import TaskContainer from "../TaskContainer/TaskContainer"
import TaskWindow from "../TaskWindow/TaskWindow"

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
  };

  return (
    <>
    <div className='taskpage'>
    <TaskContainer tasks={tasks}/>
    <TaskWindow/>
    </div>
    </>
  )
}
