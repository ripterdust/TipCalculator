import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ValueContext, defaultValues } from './components/ValueContext';



ReactDOM.render(
  <React.StrictMode>
      <ValueContext.Provider value={defaultValues}>
        <App />
      </ValueContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

