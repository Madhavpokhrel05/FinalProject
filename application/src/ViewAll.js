import React from 'react';
import EditPost from './EditPost'


import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";


export default class ViewPost extends React.Component {


	render() {
		return (
			
			<div>
				<EditPost/>	
				<EditPost/>	
				<EditPost/>	
				<EditPost/>	
				<EditPost/>	
			</div>
			
			);
	}
}
