import updateRecipeList from './recipe-list';
import updateBasket from './basket';
import updateRecipeForm from './recipe-form'

const reducer = (state, action) => {
	return {
		recipeList: updateRecipeList(state, action),
		basket: updateBasket(state, action),
		form: updateRecipeForm(state, action)
	};
};

export default reducer;