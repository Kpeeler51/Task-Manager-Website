import TaskCard from "../TaskCard/TaskCard";
import './TaskContainer.css'

interface Task {
  task: string;
  desc: string;
}

interface TaskContainerProps {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
}

export default function TaskContainer({ tasks, onTaskClick }: TaskContainerProps) {
  return (
    <div className="taskcontainer">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} onClick={() => onTaskClick(task)} />
      ))}
    </div>
  );
}
