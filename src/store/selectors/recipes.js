export const isRequestSelector = (state) => state.recipesReducer?.isRequest;
export const errorsSelector = (state) => state.recipesReducer?.errors;
export const recipesSelector = (state) => state.recipesReducer?.recipes;
export const recipeСategoriesSelector = (state) =>
  state.recipesReducer?.recipeСategories;
export const filteredRecipesSelector = (state) =>
  state.recipesReducer?.filteredRecipes;
