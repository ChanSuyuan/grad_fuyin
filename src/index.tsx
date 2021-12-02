import React from 'react';
import ReactDOM from 'react-dom';
import { AlitaProvider } from 'redux-alita';
import './style/index.less';
import './style/antd/index.less';
import './index.less'
import './common/assets/css/app.css';
import { Page } from './page';



ReactDOM.render(
  // <React.StrictMode>
  <AlitaProvider>
    <Page key='page' />
  </AlitaProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

