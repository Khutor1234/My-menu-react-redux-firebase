import { createActions } from 'redux-actions';

import { RECIPES } from '../types';

export const { getRecipes } = createActions({
  [RECIPES.GET_RECIPES]: (successCallback, failureCallback) => ({
    successCallback,
    failureCallback,
  }),
});
