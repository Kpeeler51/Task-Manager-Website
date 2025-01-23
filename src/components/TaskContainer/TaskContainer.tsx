import TaskCard from "../TaskCard/TaskCard";
import './TaskContainer.css';

// Define the type and structure for the tasks.
interface Task {
  task: string;
  desc: string;
  completed: boolean;
}
// Define the props for the TaskContainer component
interface TaskContainerProps {
  tasks: Task[]; // Array of tasks to be displayed.
  onTaskClick: (task: Task) => void; // Handler for when a task is clicked.
  onComplete: (index: number) => void; // Handler for when a task is marked as completed.
  onDelete: (index: number) => void; // Handler for when a task is deleted.
}
// TaskContainer component to renders a list of TaskCard components
// and Passes props to TaskCard.
export default function TaskContainer({
   tasks, onTaskClick, onComplete, onDelete }: TaskContainerProps) {
  return (
    <div className="taskcontainer">
      {/* Map the tasks and render a TaskCard for each of them */}
      {tasks.map((task, index) => (
        <TaskCard 
          key={index} 
          task={task} 
          onTaskClick={() => onTaskClick(task)}
          onComplete={() => onComplete(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}
