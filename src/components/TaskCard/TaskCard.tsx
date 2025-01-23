import './TaskCard.css';
import Delete from '../../assets/Icons/trashcan50.png';

interface Task {
  task: string;
  desc: string;
  completed:boolean;
}

interface TaskCardProps {
  task: Task;
  onTaskClick: () => void;
  onComplete: () => void;
  onDelete: () => void;
}

export default function TaskCard({
   task, onTaskClick, onComplete, onDelete }: TaskCardProps) {
  return (
    <div className="taskcard" onClick={onTaskClick}>
      <div className="taskcard-content">
        <h3 className={task.completed ? 'completed' : ''}>
          {task.task}
        </h3>
        <input
          type="checkbox"
          className='checkbox-input'
          checked={task.completed}
          onChange={(e) => {
            e.stopPropagation();
            onComplete();
          }}/>
      </div>
      <button 
        className="delete-button" 
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}>
        <img src={Delete} alt="Delete" />
      </button>
    </div>
  );
}