import TaskDetails from '../TaskDetails/TaskDetails';
import './TaskWindow.css'


interface Task {
  task: string;
  desc: string;
}

interface TaskWindowProps {
  selectedTask: Task | null;
}

export default function TaskWindow({ selectedTask }: TaskWindowProps) {
  return (
    <div className='task-window'>
      {selectedTask ? (
        <TaskDetails task={selectedTask} />
      ) : (
        <p className='task-select'>Select a task to view details</p>
      )}
    </div>
  )
}
