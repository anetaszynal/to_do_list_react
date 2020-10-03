import {
    takeLatest,
    call,
    put,
    delay,
    takeEvery,
    select,
} from "redux-saga/effects";
import {
    fetchExampleTasks,
    fetchExampleTasksError,
    selectTasks,
    fetchExampleTasksSuccess,
} from "./tasksSlice";
import {getExampleTasks} from "./getExampleTasks";
import {saveTasksInLocalStorage} from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield  call(alert, "Failed to download sample tasks. Please try again later.")
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}
