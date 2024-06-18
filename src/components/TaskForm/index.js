import React from "react";

const TaskForm = ({
  task,
  setTask,
  setTasks,
  tasks,
  onClose,
  handleEdit,
  isedit,
}) => {
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (!task.description || !task.title) {
      return alert("field empty");
    }

    const tasks1 = [
      ...tasks,
      {
        title: task.title,
        description: task.description,
        id: Date.now(),
        isDone: false,
      },
    ];

    setTasks(tasks1);
    setTask("");
  };

  return (
    <div>
      <form>
        <input
          name="title"
          type="text"
          onChange={(e) => handleChange(e)}
          value={task.title}
        ></input>
        <input
          name="description"
          type="text"
          onChange={(e) => handleChange(e)}
          value={task.description}
        ></input>
        {!isedit ? (
          <button
            onClick={(e) => {
              handleAdd(e);
              onClose();
            }}
          >
            ADD
          </button>
        ) : (
          <button
            onClick={(e) => {
              handleEdit(task);
              onClose();
            }}
          >
            Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default TaskForm;
