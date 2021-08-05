import updateRecipeList from './recipe-list';
import updateBasket from './basket';

const reducer = (state, action) => {
  return {
    recipeList: updateRecipeList(state, action),
    basket: updateBasket(state, action)
  };
};

export default reducer;