import React from 'react';
import Grid from '../containers/Grid';
import { Switch, Route } from 'react-router-dom';
import EditForm from '../containers/Edit';
import View from '../containers/View';

const Main = () => (
	<Switch> 
		<Route exact path='/' component={Grid} />
		<Route exact path='/employeers' component={Grid} />
		<Route path='/employeers/edit/:id' component={EditForm}/>
		<Route path='/employeers/view/:id' component={View}/>
	</Switch>
)
export default Main