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
                    show: 'img'
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

        case 'CHANGE_ITEM':
            const itemsChange = state.recipeList.recipes.map(item => {
                if(item.id === payload.recipeId){
                    return{ 
                        ...item,
                        show: payload.variant
                    }
                }
                return item
            });
            return {
                ...state.recipeList,
                recipes: itemsChange
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