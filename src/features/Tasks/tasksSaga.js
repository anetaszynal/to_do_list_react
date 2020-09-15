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
  setIsLoading,
  selectTasks,
  setTasks,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    yield put(setIsLoading(true));
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
    yield put(setIsLoading(false));
  } catch (error) {
    yield call(
      alert,
      "Nie udało się pobrać przykładowych zadań. Spróbuj później."
    );
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
