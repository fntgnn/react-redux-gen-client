import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import reduxThunk from 'redux-thunk';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Page1 from './components/page1';
import Redux from './components/redux';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

class App extends Component{
  render(){
    return(
      <div>
        App with React!
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
          <div>
            <Switch>
              <Route path='/page1' component={Page1} />
              <Route path='/redux' component={Redux} />
              <Route path='/' component={App} />
            </Switch>
          </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
