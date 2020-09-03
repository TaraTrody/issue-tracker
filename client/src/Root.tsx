import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Provider} from 'react-redux';
import App from "./App";
import store from './state/store'


const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
)

export default Root;