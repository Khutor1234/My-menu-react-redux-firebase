import { Route, Switch } from 'react-router-dom';

import './app.sass';
import { RecipesPage, BasketPage, AddNewIngredientPage, AddNewRecipePage } from '../pages';
import Header from '../header';


const App = () => {

	return (
		<div className = 'menu-app'>
			<Header/>
			<div className = 'menu-wrapper'>
				<Switch>
					<Route path = '/' component = {RecipesPage} exact />
					<Route path = '/add-new-recipe' component = {AddNewRecipePage} />
					<Route path = '/add-new-ingredient' component = {AddNewIngredientPage} />
					<Route path = '/basket' component = {BasketPage} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
