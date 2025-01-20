import TaskCard from "../TaskCard/TaskCard";
import './TaskContainer.css'

interface Task {
  task: string;
  desc: string;
}

interface TaskContainerProps {
  tasks: Task[];
}

export default function TaskContainer({ tasks }: TaskContainerProps) {
  const taskList = tasks.map((task) => (
    <TaskCard key={Date.now()} task={task.task} />
  ));

  return (
    <div className="taskcontainer">
      TaskContainer
      {taskList}
    </div>
  );
}