import './TaskCard.css'
interface TaskCardProps {
    task: string;
  }
  
  export default function TaskCard({ task }: TaskCardProps) {
    return (
      <div className="taskcard">{task}</div>
    )
  }
  