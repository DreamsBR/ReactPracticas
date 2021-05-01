import React from 'react';
import ReactDOM from 'react-dom';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithHook } from './components/01-useState/CounterWithHook';
import { SimgleForm } from './components/02-useEffect/SimgleForm';
// import { HookApp } from './HookApp';
import './index.css';



ReactDOM.render(
  <FormWithCustomHook/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

