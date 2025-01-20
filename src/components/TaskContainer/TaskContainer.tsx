import TaskCard from "../TaskCard/TaskCard";

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
    <div>
      TaskContainer
      {taskList}
    </div>
  );
}