import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import appReducer from '.././reducers/appReducer';

export default function (initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()

  const middleware = [
    sagaMiddleware
  ]

  const store = createStore(
    appReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
    )
  )

  store.sagaMiddleware = sagaMiddleware
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)

  return store
}
