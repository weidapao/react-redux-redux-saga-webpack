import { delay } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'

export function* incrementAsync() {
  yield call(delay, 3000)
  yield put({type: 'SHOWINFO'})
}

export function* watchIncrementAsync() {
  yield takeLatest('UPDATE_VAL', incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    watchIncrementAsync()
  ]
}