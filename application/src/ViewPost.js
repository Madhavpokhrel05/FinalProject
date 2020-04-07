import React from 'react';
import ViewAll from './ViewAll'
import AddApplication from './AddApplication';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";


export default class ViewPost extends React.Component {


	render() {
		return (
			<Router>
			<div className="mx-auto">
			<Switch>
			<Route path="/AddApplication" component={AddApplication} />
			<Route path="/"  component={ViewAll} />
			</Switch>			
			</div>
			</Router>
			);
	}
}
