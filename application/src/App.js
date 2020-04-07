
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Admin from './Admin'
import Blog from './Blog'
class App extends Component {
    render() {
        return (
            <div>
            <Router>
            <Switch>
            <Route path="/" exact={true} component={Blog} />
            <Route path="/admin" component={Admin} />
            </Switch>
            </Router>
            </div>
        );
    }
}

export default App;
