import {useState} from 'react';

import TaskContainer from "../TaskContainer/TaskContainer"
import TaskWindow from "../TaskWindow/TaskWindow"

export default function Tasks() {
    const [tasks, setTasks] = useState ([
      {task:'chores', desc: 'take out trash'},
      {task: 'clean', desc: 'clean room'},
      {task: 'activity', desc: 'physical activity'},  ]);
    
    



  return (
    <>
    <div>Tasks</div>
    <TaskContainer tasks={tasks}/>
    <TaskWindow/>
    </>
  )
}
