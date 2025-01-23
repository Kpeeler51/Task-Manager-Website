import './TaskCard.css';
import Delete from '../../assets/Icons/trashcan50.png';

// Define the type and structure for the tasks.
interface Task {
  task: string;
  desc: string;
  completed:boolean;
}
// Define the props for the TaskCard component
interface TaskCardProps {
  task: Task;
  onTaskClick: () => void;
  onComplete: () => void;
  onDelete: () => void;
}
// TaskCard component to render a single task card. 
export default function TaskCard({
   task, onTaskClick, onComplete, onDelete }: TaskCardProps) {
  return (
    // task card container with a click event to select the task.
    <div className="taskcard" onClick={onTaskClick}>
      <div className="taskcard-content">
        {/* Task title. Classname and styling based on whether marked as
        completed or not. */}
        <h3 className={task.completed ? 'completed' : ''}>
          {task.task}
        </h3>
        {/* Checkbox for task completion. */}
        <input
          type="checkbox"
          className='checkbox-input'
          checked={task.completed}
          onChange={(e) => {
            e.stopPropagation(); // Prevents accidental event overlap.
            onComplete();
          }}/>
      </div>
      {/* Delete button */}
      <button 
        className="delete-button" 
        onClick={(e) => {
          e.stopPropagation();  // Prevents accidental event overlap.
          onDelete();
        }}>
        <img src={Delete} alt="Delete" />
      </button>
    </div>
  );
}