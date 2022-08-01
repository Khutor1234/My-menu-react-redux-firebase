import { createActions } from 'redux-actions';

import { RECIPES } from '../types';

export const {
  getRecipes,
  searchRecipes,
  addRecipeItem,
  editRecipe,
  deleteRecipeItem,
} = createActions({
  [RECIPES.GET_RECIPES]: (category) => ({ category }),
  [RECIPES.SEARCH_RECIPES]: (text) => ({ text }),
  [RECIPES.ADD_RECIPE_ITEM]: (data) => ({ data }),
  [RECIPES.EDIT_RECIPE]: (id, data) => ({ id, data }),
  [RECIPES.DELETE_RECIPE_ITEM]: (id) => ({ id }),
});
