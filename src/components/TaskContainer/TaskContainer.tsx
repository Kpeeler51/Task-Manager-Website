import TaskCard from "../TaskCard/TaskCard";
import './TaskContainer.css'

interface Task {
  task: string;
  desc: string;
  completed: boolean;
}

interface TaskContainerProps {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
  onComplete: (index: number) => void;
  onDelete: (index: number) => void;
}

export default function TaskContainer({
   tasks, onTaskClick, onComplete, onDelete }: TaskContainerProps) {
  return (
    <div className="taskcontainer">
      {tasks.map((task, index) => (
        <TaskCard 
          key={index} 
          task={task} 
          onClick={() => onTaskClick(task)}
          onComplete={() => onComplete(index)}
          onDelete={() => onDelete(index)  }
        />
      ))}
    </div>
  );
}
