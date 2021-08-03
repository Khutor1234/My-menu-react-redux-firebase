import { Route, Switch } from 'react-router-dom';

import './app.css';
import { RecipesPage, BasketPage, AddNewIngredientPage, AddNewRecipePage } from '../pages'


const App = () => {

	return (
		<Switch>
			<Route path = '/' component = {RecipesPage} exact />
			<Route path = '/add-new-recipe' component = {AddNewRecipePage} />
			<Route path = '/add-new-ingredient' component = {AddNewIngredientPage} />
			<Route path = '/basket' component = {BasketPage} />
		</Switch>
	);
}

export default App
