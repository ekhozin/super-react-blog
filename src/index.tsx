import 'bootstrap';
import React from 'react';
import {render} from 'react-dom';
import store from 'store';
import AppContainer from 'containers/AppContainer';

const rootElement = document.getElementById('root');

render(
  <AppContainer store={store}/>,
  rootElement
);
