import './TaskCard.css'
import Delete from '../../assets/Icons/trashcan50.png'

interface Task {
  task: string;
  desc: string;
  completed:boolean;
}

interface TaskCardProps {
  task: Task;
  onClick: () => void;
  onComplete: () => void;
  onDelete: () => void;
}

export default function TaskCard({
   task, onClick, onComplete, onDelete }: TaskCardProps) {
  return (
    <div className="taskcard" onClick={onClick}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={(e) => {
          e.stopPropagation();
          onComplete();
        }}
      />
      <h3 className={task.completed ? 'completed' : ''}>
        {task.task}
      </h3>
      <p>{task.desc}</p>
      <button 
        className="delete-button" 
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        <img src={Delete} alt="Delete" />
      </button>
    </div>
  );
}