import { Route, Switch } from 'react-router-dom';
import { RecipesPage, BasketPage, LoginPage } from '../pages';
const App = () => {
	return (
		<div>
			<Switch>
				<Route path = '/' component = {RecipesPage} exact />
				<Route path = '/basket' component = {BasketPage} />
				<Route path = '/login' component = {LoginPage} />
			</Switch>
		</div>
	);
}

export default App;
