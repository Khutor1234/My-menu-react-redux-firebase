import { createActions } from 'redux-actions';

import { RECIPES } from '../types';

export const { getRecipes, searchRecipes } = createActions({
  [RECIPES.GET_RECIPES]: (category, successCallback, failureCallback) => ({
    category,
    successCallback,
    failureCallback,
  }),
  [RECIPES.SEARCH_RECIPES]: (text) => ({ text }),
});
