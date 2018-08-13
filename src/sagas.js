import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'

import { requestDog, requestDogSuccess, requestDogError } from './actions/dogActions/index'
import { FETCHED_DOG } from './actions/dogActions/types'

// watcher saga
export function* watchFetchDog() {
  yield takeEvery(FETCHED_DOG, fetchDogAsync);
}

// worker saga
function* fetchDogAsync() {
  try {
    yield put(requestDog())
    yield delay(1000)
    const data = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
    })
    yield put(requestDogSuccess(data))
  } catch(error) {
    yield put(requestDogError(error))
  }
}