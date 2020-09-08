import { fork, all } from 'redux-saga/effects'

import watchUser from './userAuthentification'
import watchTrip from './trip'

export default function* rootSaga() {
  yield all([
    fork(watchUser),
    fork(watchTrip),
  ])
}