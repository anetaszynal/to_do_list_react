import { useState, useEffect } from "react";

export const useTasks = () => {
  const getInitialTasks = () => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");

    return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
  };

  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask = (newTaskContent) => {
    const trimmedTaskContent = newTaskContent.trim();
    if (trimmedTaskContent.length > 0) {
      setTasks((tasks) => [
        ...tasks,
        {
          id: tasks.length + 1,
          content: trimmedTaskContent,
          done: false,
        },
      ]);
    }
    return;
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const completeAll = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };

  return { tasks, addNewTask, toggleTaskDone, deleteTask, completeAll };
};
