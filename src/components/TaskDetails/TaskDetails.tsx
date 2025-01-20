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
      <h2>{task.task}</h2>
      <p>{task.desc}</p>
    </div>
  )
}