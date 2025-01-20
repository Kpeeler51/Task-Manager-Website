import './TaskCard.css'

interface Task {
  task: string;
  desc: string;
}

interface TaskCardProps {
  task: Task;
  onClick: () => void;
}

export default function TaskCard({ task, onClick }: TaskCardProps) {
  return (
    <div className="taskcard" onClick={onClick}>
      {task.task}
    </div>
  )
}