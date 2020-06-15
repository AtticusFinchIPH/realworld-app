import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import App from './components/App';
import { Provider } from 'react-redux';

const defaultState = {
  appName: 'conduit',
  articles: null
};
const reducer = function(state = defaultState, action){
  switch(action.type){
    case 'TOGGLE':
      return {...state, checked: !state.checked};
      default:
      return state;
  }
};
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
