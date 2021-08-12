import { Route, Switch } from 'react-router-dom';

import { RecipesPage, BasketPage } from '../pages';
import Header from '../header';


const App = () => {

	return (
		<div>
			<Header/>
			<Switch>
				<Route path = '/' component = {RecipesPage} exact />
				<Route path = '/basket' component = {BasketPage} />
			</Switch>
		</div>
	);
}

export default App;
