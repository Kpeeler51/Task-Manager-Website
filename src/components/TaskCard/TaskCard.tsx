
interface TaskCardProps {
    task: string;
  }
  
  export default function TaskCard({ task }: TaskCardProps) {
    return (
      <div className="TaskCard">{task}</div>
    )
  }
  