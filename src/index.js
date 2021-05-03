import React from 'react';
import ReactDOM from 'react-dom';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// // import { CounterApp } from './components/01-useState/CounterApp';
// // import { CounterWithHook } from './components/01-useState/CounterWithHook';
// import { SimgleForm } from './components/02-useEffect/SimgleForm';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExample } from './components/04-useRef/RealExample';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { CallBackHook } from './components/06-memos/CallBackHook';
// import { MemoHoook } from './components/06-memos/MemoHook';
// import { Memorize } from './components/06-memos/Memorize';
// import { Padre } from './components/07-tarea-memo/Padre';
import { TodoApp } from './components/08-useReducer/TodoApp';
// import { HookApp } from './HookApp';
import './index.css';

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import './components/08-useReducer/intro-reducer'