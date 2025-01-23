import {useState, useMemo} from 'react';
import './Tasks.css';
import TaskContainer from '../TaskContainer/TaskContainer';
import TaskWindow from '../TaskWindow/TaskWindow';
import TaskForm from '../TaskForm/TaskForm';
import FilterButtons from '../FilterButtons/FilterButtons';

// Define the type and structure for tasks.
interface Task {
  task: string;
  desc: string;
  completed: boolean;
}
// Tasks page for displaying task UI and task data management.
export default function Tasks() {
  // state for storing all tasks and their status.
  const [tasks, setTasks] = useState<Task[]>([
    {task:'chores', desc: 'take out trash', completed: false},
    {task: 'clean', desc: 'clean room', completed: false},
    {task: 'activity', desc: 'physical activity', completed: false},
  ]);

  // State for current filter selection. 
  const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');

  // Handler for toggling task completion.
  const handleComplete = (index: number) => {
    setTasks(prevTasks => prevTasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  // Handler for deleting a task.
  const handleDelete = (index : number) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i!== index));
  };

  // State for currently selected task. 
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // Handler for clicking and selecting a new task. 
  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  // Handler for adding a new task.
  const handleAddTask = (newTask: Task) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Memoize the filtered tasks based on the current filter. 
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
        {/* TaskForm component for adding new tasks. */}
      <TaskForm onAddTask={handleAddTask} />
      {/* Container for displaying tasks. */}
      <TaskContainer 
        tasks={filteredTasks} 
        onTaskClick={handleTaskClick} 
        onComplete={handleComplete}
        onDelete={handleDelete}/>
        {/* Buttons for task filtering. */}
      <FilterButtons setFilter={setFilter} currentFilter={filter} />
      </div>
      {/* Window for displaying selected task info. */}
      <TaskWindow selectedTask={selectedTask} />
    </main>
  )
}
