import React from 'react';
import ReactDOM from 'react-dom';

import CounterContainer from './components/Counter/containers/CounterContainer';


ReactDOM.render(
  <React.StrictMode>
    <CounterContainer />
  </React.StrictMode>,
  document.getElementById('root')
);