import React from "react";
import TaskItem from "../TaskItem";
import "./style.css";

const TaskList = ({
  tasks,
  setTasks,
  handleClose,
  handleOpen,
  open,
  handleEdit,
}) => {
  return (
    <div>
      {tasks.map((t) => {
        return (
          <div key={t.id}>
            <TaskItem
              title={t.title}
              description={t.description}
              isDone={t.isDone}
              id={t.id}
              tasks={tasks}
              setTasks={setTasks}
              task={t}
              handleClose={handleClose}
              handleOpen={handleOpen}
              open={open}
              handleEdit={handleEdit}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
