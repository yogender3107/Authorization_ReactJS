import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import Feature from './components/Feature';
import App from './components/App';
import Welcome from './components/welcome';
import SignUp from './components/auth/Signup';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';

const store = createStore(
    reducers,
    { auth: { authenticated: localStorage.getItem('token') } },
    applyMiddleware(reduxThunk)
)
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={Signin} />
                <Route path="/signout" component={Signout} />
                <Route path="/feature" component={Feature} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)