import './TaskDetails.css'

interface Task {
  task: string;
  desc: string;
}

interface TaskDetailsProps {
  task: Task;
}

export default function TaskDetails({ task }: TaskDetailsProps) {
  return (
    <div className="task-details">
      <h2 className='task-title'>{task.task}</h2>
      <p className='task-desc'>{task.desc}</p>
    </div>
  )
}