import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter(({ id }) => id !== payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    completeAll: (state) => {
      state.tasks = state.tasks.map((task) => ({ ...task, done: true }));
    },
  },
});

export const {
  addTask,
  toggleTaskDone,
  deleteTask,
  toggleHideDone,
  completeAll,
} = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
