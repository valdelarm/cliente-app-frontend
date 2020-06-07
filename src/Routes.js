import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login/LoginForm';
import ClienteView from './pages/cliente/ClienteView';
import PrivateRoute from './PrivateRoutes'
export default function Routes() {
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login}/>
				<PrivateRoute authenticated={false} path="/clientes" component={ClienteView}/>
			</Switch>
		</BrowserRouter>
	);
}