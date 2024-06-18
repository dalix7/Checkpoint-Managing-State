import React from "react";
import "./style.css";
import cx from "classnames";

const TaskItem = ({
  title,
  isDone,
  id,
  tasks,
  setTasks,
  description,
  task,
  handleClose,
  handleOpen,
  open,
  handleEdit,
}) => {
  const handlDelete = (idd) => {
    const tasksCopie = [...tasks];
    const itemIndex = tasksCopie.findIndex((item) => {
      return item.id === idd;
    });
    tasksCopie.splice(itemIndex, 1);
    setTasks(tasksCopie);
  };
  const handlDone = (idd) => {
    const tasksCopie = [...tasks];
    const itemIndex = tasksCopie.findIndex((item) => {
      return item.id === idd;
    });
    tasksCopie[itemIndex].isDone = !tasksCopie[itemIndex].isDone;

    setTasks(tasksCopie);
  };

  return (
    <div className="task-item">
      <div>
        {" "}
        <h2 className={cx({ isDone })}>{title}</h2>
        <p className={cx({ isDone })}>{description}</p>
      </div>

      <div className="card-action">
        <button onClick={() => handleEdit(task)}>Edit</button>
        <button onClick={() => handlDone(id)}>
          {isDone ? "UnDo" : "Done"}
        </button>
        <button
          onClick={() => {
            handlDelete(id);
          }}
        >
          Del
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
