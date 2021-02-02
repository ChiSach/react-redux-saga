import { put, takeEvery, all, takeLatest  } from 'redux-saga/effects'
import { START } from "./contant"
import { PLUS } from "./contant"
import { END } from "./contant"
import { DIV } from "./contant"
const delay = (ms) => new Promise(res => setTimeout(res, ms))

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  console.log('Hello, Saga')
  yield delay(3000)
  yield put({ type: PLUS, payload: 100 })
  console.log('Good bye, Saga!')
}

function* inDecrementAsync() {
  console.log('Hello, Saga')
  yield delay(3000)
  yield put({ type: DIV, payload: 100 })
  console.log('Good bye, Saga!')
}

// // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
// function* watchStartAsync() {
//   yield takeEvery(START, incrementAsync)
// }

// // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
// function* watchEndAsync() {
//   yield takeEvery(END, inDecrementAsync)
// }

// export function *rootSaga() {
//   yield all([
//     takeEvery(START, incrementAsync),
//     takeEvery(END, inDecrementAsync)
//   ]);
// }

export function* rootSaga() {
  yield takeEvery(START, incrementAsync)
  yield takeEvery(END, inDecrementAsync)
}

