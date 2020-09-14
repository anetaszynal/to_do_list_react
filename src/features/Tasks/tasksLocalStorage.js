const localStorageKey = "tasks";

export const saveTasksInLocalStorage = (tasks) =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () => {
  const tasks = JSON.parse(localStorage.getItem(localStorageKey)) || [];
  return tasks;
};
