import React from 'react';
import LoginMavigator from './routes/loginNav';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <LoginMavigator />
    </Provider>
  );
}