import React, { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import { Tasks } from "./dataTask";
import ModalForm from "./components/Modal/FormModal";

function App() {
  const [open, setOpen] = React.useState(false);
  const [isedit, setIsEdit] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState(Tasks);
  const handleEdit = (task) => {
    if (!task.description || !task.title) {
      return alert("field empty");
    }
    const tasksCopie = [...tasks];
    const index = tasks.findIndex((t) => t.id === task.id);
    setIsEdit(true);
    handleOpen();
    setTask(task);
    tasksCopie[index] = task;
    setTasks(tasksCopie);
  };
  return (
    <div className="App">
      <ModalForm
        task={task}
        description={task.description}
        tasks={tasks}
        setTask={setTask}
        setTasks={setTasks}
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        handleEdit={handleEdit}
        isedit={isedit}
        setIsEdit={setIsEdit}
      />

      <TaskList
        tasks={tasks}
        task={task}
        description={task.description}
        setTasks={setTasks}
        // handleClose={handleClose}
        // handleOpen={handleOpen}
        // open={open}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
