const updateRecipeList = (state, action) => {

    if (state === undefined) {
        return {
          recipes: [],
          loading: true,
          error: null
        };
      }

    switch(action.type){
        case 'RECIPES_REQUESTED':
            return{
                recipes: [],
                loading: true,
                error: null
            };

        case 'RECIPES_LOADED':
            return {
                recipes: action.payload,
                loading: false,
                error: null
            };

        case 'RECIPES_ERROR':
            return {
                recipes: [],
                loading: false,
                error: action.payload
            };

        default:
            return state.recipeList;
    }
}

export default updateRecipeList;