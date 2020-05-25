import React from 'react';
import AppNavigator from './routes/index';
import { Provider } from 'react-redux';
import createStore from './utils/createStore';
import sagas from './sagas/index';

const store = createStore({})

store.runSaga(sagas)

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}