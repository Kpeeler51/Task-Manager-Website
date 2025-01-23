import './TaskDetails.css';

// Define the type and structure for the tasks.
interface Task {
  task: string;
  desc: string;
}
 // Define the props for the TaskDetails component.
interface TaskDetailsProps {
  task: Task;
}

// TaskDetails component that renders the task details into the TaskWindow.
export default function TaskDetails({ task }: TaskDetailsProps) {
  return (
    <div className="task-details">
      {/* Task Title. */}
      <h2 className='task-title'>{task.task}</h2>
      {/* Task Title */}
      <p className='task-desc'>{task.desc}</p>
    </div>
  )
}