import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom'
import App from './App';
import './index.css';
import Root from './Root';

const container = document.querySelector('#root')
// const Root = createRoot(container);
// Root.render(<h1>Hello from Root</h1>);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  container // or document.getElementById('root') 
);
