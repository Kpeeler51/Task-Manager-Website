import {useState, useMemo} from 'react';
import './Tasks.css'
import TaskContainer from "../TaskContainer/TaskContainer"
import TaskWindow from "../TaskWindow/TaskWindow"
import TaskForm from "../TaskForm/TaskForm"
import FilterButtons from '../FilterButtons/FilterButtons'

interface Task {
  task: string;
  desc: string;
  completed:boolean;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    {task:'chores', desc: 'take out trash', completed: false},
    {task: 'clean', desc: 'clean room', completed: false},
    {task: 'activity', desc: 'physical activity', completed: false},
  ]);

  const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');

  const handleComplete = (index: number) => {
    setTasks(prevTasks => prevTasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDelete = (index : number) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i!== index));
  };

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    console.log(`Task selected: ${task.task}`);
  };

  const handleAddTask = (newTask: Task) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'active':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return (
    <main className='taskpage'>
      <div className="tasktab">
      <TaskForm onAddTask={handleAddTask} />
      <TaskContainer 
        tasks={filteredTasks} 
        onTaskClick={handleTaskClick} 
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
      <FilterButtons setFilter={setFilter} currentFilter={filter} />
      </div>
      <TaskWindow selectedTask={selectedTask} />
    </main>
  )
}
