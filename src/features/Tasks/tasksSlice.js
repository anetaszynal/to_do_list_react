import {createSlice} from "@reduxjs/toolkit";
import {getTasksFromLocalStorage} from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        isLoading: false,
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({tasks}, {payload: task}) => {
            tasks.push(task);
        },
        toggleTaskDone: ({tasks}, {payload: taskId}) => {
            const index = tasks.findIndex(({id}) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        deleteTask: ({tasks}, {payload: taskId}) => {
            const index = tasks.findIndex(({id}) => id === taskId);
            tasks.splice(index, 1);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        completeAll: ({tasks}) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        fetchExampleTasks: (state) => {
            state.isLoading = true;
        },
        fetchExampleTasksSuccess: (state, {payload: tasks}) => {
            state.tasks = tasks;
            state.isLoading = false;
        },
        fetchExampleTasksError: (state) => {
            state.isLoading = false;
        }
    },
});

export const {
    addTask,
    toggleTaskDone,
    deleteTask,
    toggleHideDone,
    completeAll,
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError
} = tasksSlice.actions;
export const selectTasks = (state) => state.tasks.tasks;
export const selectHideDone = (state) => state.tasks.hideDone;
export const selectIsLoading = (state) => state.tasks.isLoading;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({id}) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);
    if (!query || query.trim() === "") {
        return tasks;
    }
    return tasks.filter(({content}) =>
        content.toUpperCase().includes(query.trim().toUpperCase())
    );
};

export default tasksSlice.reducer;
