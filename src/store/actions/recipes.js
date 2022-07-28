import { createActions } from 'redux-actions';

import { RECIPES } from '../types';

export const { getRecipes, searchRecipes, addRecipeItem } = createActions({
  [RECIPES.GET_RECIPES]: (category, successCallback, failureCallback) => ({
    category,
    successCallback,
    failureCallback,
  }),
  [RECIPES.SEARCH_RECIPES]: (text) => ({ text }),
  [RECIPES.ADD_RECIPE_ITEM]: (data, successCallback, failureCallback) => ({
    data,
    successCallback,
    failureCallback,
  }),
});
