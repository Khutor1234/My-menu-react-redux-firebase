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
    // filteredRecipes: state?.filteredRecipes?.filter(
    //   (el) => el.category === response[0]?.category
    // ),
    errors: null,
  }),
  [RECIPES.GET_RECIPES_FAILURE]: (state, { payload: { errors } }) => ({
    ...state,
    isRequest: false,
    recipes: null,
    errors: errors,
  }),

  [RECIPES.SEARCH_RECIPES]: (state, { payload: { text } }) => {
    console.log(text, 'text');
    const filteredRecipes = state.recipes.filter((el) => {
      return el.title.toLowerCase().indexOf(text.toLowerCase()) !== -1;
    });
    return {
      ...state,
      filteredRecipes: filteredRecipes.length > 0 ? filteredRecipes : text,
    };
  },
});
