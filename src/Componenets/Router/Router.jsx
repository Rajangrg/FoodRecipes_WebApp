import React from 'react';

// react router dom
import { Route, Switch, BrowserRouter } from 'react-router-dom';

//components
import App from '../../App.js';
import RecipeDetail from '../RecipeDetail/RecipeDetail'

const Router = () => {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/" component={App} exact></Route>
					<Route path="/recipeDetail/:id" component={RecipeDetail}></Route>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default Router;