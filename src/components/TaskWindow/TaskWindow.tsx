import TaskDetails from '../TaskDetails/TaskDetails';
import './TaskWindow.css';

// Define the type and structure for the tasks.
interface Task {
  task: string;
  desc: string;
}

// Define the props for the TaskWindowProps component.
interface TaskWindowProps {
  selectedTask: Task | null;
}

// TaskWindow component to display the details of the selected task.
export default function TaskWindow({ selectedTask }: TaskWindowProps) {
  return (
    <div className='task-window'>
      {/* If a task is selected display its details. If no task has been selected
      display a "select task to view details" message. */}
      {selectedTask ? (
        <TaskDetails task={selectedTask} />
      ) : (
        <p className='task-select'>Select a task to view details</p>
      )}
    </div>
  )
}
