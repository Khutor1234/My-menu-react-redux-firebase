const updateRecipeList = (state, action) => {
    const {type, payload} = action;

    if (state === undefined) {
        return {
          recipes: [],
          loading: true,
          error: null
        };
    }

    switch(type){
        case 'REQUESTED':
            return{
                recipes: [],
                loading: true,
                error: null
            };

        case 'LOADED':
            const itemsRecipesLoaded = payload.map(item => {
                return{
                    ...item,
                    showImg: true,
                    showIngrid: false,
                    showRecipe: false
                }
            })
            return {
                recipes: itemsRecipesLoaded,
                loading: false,
                error: null,
                basketIsFul: false
            };

        case 'ERROR':
            return {
                recipes: [],
                loading: false,
                error: payload
            };

        case 'CHANGE_IMG':
            const itemsChangeImg = state.recipeList.recipes.map(item => {
                if(item.id === payload){
                    return{ 
                        ...item,
                        showImg: true,
                        showIngrid: false,
                        showRecipe: false
                    }
                }
                return item
            });
            return {
                ...state.recipeList,
                recipes: itemsChangeImg
              };
            
        case 'CHANGE_INGRID':
            const itemsChangeIngrid = state.recipeList.recipes.map(item => {
                if(item.id === payload){
                    return{ 
                        ...item,
                        showImg: false,
                        showIngrid: true,
                        showRecipe: false
                    }
                }
                return item
            });
            return {
                ...state.recipeList,
                recipes: itemsChangeIngrid
                };

        case 'CHANGE_RECIPE':
            const itemsChangeRecipe = state.recipeList.recipes.map(item => {
                if(item.id === payload){
                    return{ 
                        ...item,
                        showImg: false,
                        showIngrid: false,
                        showRecipe: true
                    }
                }
                return item
            });
            return {
                ...state.recipeList,
                recipes: itemsChangeRecipe
                };

        case 'RECIPES_ADDED_TO_MENU':
            return{
                ...state.recipeList,
                basketIsFul: true
            }

        default:
            return state.recipeList;
    }
}

export default updateRecipeList;