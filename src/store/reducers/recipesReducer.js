import initialState from '../initialStates';
import injectReducer from '../injectReducer';

import { RECIPES } from '../types';

export default injectReducer(initialState.recipesReducer, {
  [RECIPES.GET_RECIPES]: (state) => ({
    ...state,
    isRequest: true,
    errors: null,
  }),
  [RECIPES.GET_RECIPES_SUCCESS]: (state, { payload: { response } }) => {
    return {
      ...state,
      isRequest: false,
      recipes: response,
      filteredRecipes: null,
      errors: null,
    };
  },
  [RECIPES.GET_RECIPES_FAILURE]: (state, { payload: { errors } }) => ({
    ...state,
    isRequest: false,
    recipes: null,
    errors: errors,
  }),

  [RECIPES.SEARCH_RECIPES]: (state, { payload: { text } }) => {
    const filteredRecipes = state?.recipes?.filter((el) => {
      return el.title.toLowerCase().indexOf(text.toLowerCase()) !== -1;
    });
    return {
      ...state,
      filteredRecipes: filteredRecipes.length > 0 ? filteredRecipes : text,
    };
  },

  [RECIPES.ADD_RECIPE_ITEM]: (state) => ({
    ...state,
    isRequest: true,
    errors: null,
  }),
  [RECIPES.ADD_RECIPE_ITEM_SUCCESS]: (state, { payload: { response } }) => ({
    ...state,
    isRequest: false,
    recipes: [{ ...response, id: Date.now() }, ...state.recipes],
    errors: null,
  }),
  [RECIPES.ADD_RECIPE_ITEM_FAILURE]: (state, { payload: { errors } }) => ({
    ...state,
    isRequest: false,
    recipes: null,
    errors: errors,
  }),

  [RECIPES.EDIT_RECIPE]: (state) => ({
    ...state,
    isRequest: true,
    errors: null,
  }),
  [RECIPES.EDIT_RECIPE_SUCCESS]: (
    state,
    {
      payload: {
        response: { id, data },
      },
    }
  ) => ({
    ...state,
    isRequest: false,
    recipes: [
      { ...data, id: id },
      ...state.recipes?.filter((el) => el.id !== id),
    ],
    errors: null,
  }),
  [RECIPES.EDIT_RECIPE_FAILURE]: (state, { payload: { errors } }) => ({
    ...state,
    isRequest: false,
    recipes: [],
    errors: errors,
  }),

  [RECIPES.DELETE_RECIPE_ITEM]: (state) => ({
    ...state,
    isRequest: true,
    errors: null,
  }),
  [RECIPES.DELETE_RECIPE_ITEM_SUCCESS]: (
    state,
    {
      payload: {
        response: { id },
      },
    }
  ) => ({
    ...state,
    isRequest: false,
    recipes: state?.recipes?.filter((el) => el.id !== id),
    errors: null,
  }),
  [RECIPES.DELETE_RECIPE_ITEM_FAILURE]: (state, { payload: { errors } }) => ({
    ...state,
    isRequest: false,
    recipes: null,
    errors: errors,
  }),
});
