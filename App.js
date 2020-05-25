import React from 'react';
import LoginMavigator from './routes/loginNav';
import { Provider } from 'react-redux';
import createStore from './utils/createStore';
import sagas from './sagas/index';

const store = createStore({})

store.runSaga(sagas)

export default function App() {
  return (
    <Provider store={store}>
      <LoginMavigator />
    </Provider>
  );
}