import React from 'react';
import Navigation from './Src/navigation';
import { Provider } from 'react-redux';
import store from './Src/Store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
