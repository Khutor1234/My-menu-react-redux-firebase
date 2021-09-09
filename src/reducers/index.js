import updateRecipeList from './recipe-list';
import updateBasket from './basket';
import updateRecipeForm from './recipe-form';
import updateUser from './user';

const reducer = (state, action) => {
	return {
		user: updateUser(state, action),
		recipeList: updateRecipeList(state, action),
		basket: updateBasket(state, action),
		form: updateRecipeForm(state, action)
	};
};

export default reducer;