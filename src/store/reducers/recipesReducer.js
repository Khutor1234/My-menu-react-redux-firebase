import initialState from '../initialStates';
import injectReducer from '../injectReducer';

import { RECIPES } from '../types';

export default injectReducer(initialState.recipesReducer, {
  [RECIPES.GET_RECIPES]: (state) => ({
    ...state,
    isRequest: true,
    errors: null,
  }),
  [RECIPES.GET_RECIPES_SUCCESS]: (state, { payload: { response } }) => ({
    ...state,
    isRequest: false,
    recipes: response,
    errors: null,
  }),
  [RECIPES.GET_RECIPES_FAILURE]: (state, { payload: { errors } }) => ({
    ...state,
    isRequest: false,
    recipes: null,
    errors: errors,
  }),
});
