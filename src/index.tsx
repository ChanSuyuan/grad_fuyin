import React from 'react';
import ReactDOM from 'react-dom';
import { AlitaProvider } from 'redux-alita';
import './index.less'
import { Page } from './page';



ReactDOM.render(
  // <React.StrictMode>
  <AlitaProvider>
    <Page />
  </AlitaProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

