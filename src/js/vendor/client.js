import Layout from '../pages/Layout';
import Todos from '../pages/Todos';
import Settings from '../pages/settings';

import {Router, Route, IndexRoute, hashHistory} from "react-router";
import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Todos} ></IndexRoute>
        <Route path="settings" component={Settings}></Route>
        <Route path='featured' component={Todos}></Route>
        </Route>
        
    </Router>, document.getElementById('app'))