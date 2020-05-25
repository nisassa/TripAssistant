import { fork, all } from 'redux-saga/effects'

import watchUser from './auth/userAuthentification'

export default function * rootSaga () {
  yield all([
    fork(watchUser)
  ])
}