import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import './index.css';
import App from './App';


// const rootElemet = document.getElementById("root");
const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);

render();
