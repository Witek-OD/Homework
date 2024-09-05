import { call, put, takeEvery } from 'redux-saga/effects';

const fakeApi = {
    loadTodos: () =>
        Promise.resolve([
            { id: 1, text: 'Learn Redux-Saga', completed: false },
            { id: 2, text: 'Create Todo App', completed: false },
        ]),
};

function* loadTodos() {
    const todos = yield call(fakeApi.loadTodos);
    yield put({ type: 'SET_TODOS', payload: todos });
}

function* addTodoSaga(action) {
    // Логика для добавления задачи на сервере может быть добавлена здесь
    yield put({ type: 'ADD_TODO', payload: action.payload });
}

function* removeTodoSaga(action) {
    yield put({ type: 'REMOVE_TODO', payload: action.payload });
}

function* toggleTodoSaga(action) {
    yield put({ type: 'TOGGLE_TODO', payload: action.payload });
}

function* editTodoSaga(action) {
    yield put({ type: 'EDIT_TODO', payload: action.payload });
}

function* clearTodosSaga() {
    yield put({ type: 'CLEAR_TODOS' });
}

export default function* todoSaga() {
    yield takeEvery('LOAD_TODOS', loadTodos);
    yield takeEvery('ADD_TODO_REQUEST', addTodoSaga);
    yield takeEvery('REMOVE_TODO_REQUEST', removeTodoSaga);
    yield takeEvery('TOGGLE_TODO_REQUEST', toggleTodoSaga);
    yield takeEvery('EDIT_TODO_REQUEST', editTodoSaga);
    yield takeEvery('CLEAR_TODOS_REQUEST', clearTodosSaga);
}