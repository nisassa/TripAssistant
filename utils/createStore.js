import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import makeRootReducer from '.././reducers/index';

export default function (initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()

  const middleware = [
    sagaMiddleware
  ]

  const store = createStore(
    makeRootReducer(),
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
