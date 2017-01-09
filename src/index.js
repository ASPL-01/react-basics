import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Basic from './Basic';
import Sum from './Sum';
import Counter from './Counter';
import './index.css';

ReactDOM.render(
  <div>
    <Counter />
    <Counter />
  </div>,
  document.getElementById('root')
);
