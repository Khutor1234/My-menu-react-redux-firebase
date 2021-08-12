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
        case 'RECIPES_REQUESTED':
            return{
                recipes: [],
                loading: true,
                error: null
            };

        case 'RECIPES_LOADED':
            const itemsRecipesLoaded = payload.map(item => {
                return{
                    ...item,
                    img: true
                }
            })
            return {
                recipes: itemsRecipesLoaded,
                loading: false,
                error: null
            };

        case 'RECIPES_ERROR':
            return {
                recipes: [],
                loading: false,
                error: payload
            };

        case 'SELECT_CATEGORY':
            let itemsSelected = state.recipeList.recipes.filter(recipe => {
                return recipe.category.indexOf( payload ) !== -1
            });
            return {
                ...state.recipeList,
                recipes: itemsSelected
            };
            
            

        case 'CHANGE_IMG':
            const itemsChangeImg = state.recipeList.recipes.map(item => {
                if(item.id === payload && !item.img){
                    return{ 
                        ...item,
                        img: true
                    }
                }
                if(item.id === payload && item.img){
                    return{ 
                        ...item,
                        img: false
                    }
                }
                return item
            });
            return {
                ...state.recipeList,
                recipes: itemsChangeImg
              };
            
            

        default:
            return state.recipeList;
    }
}

export default updateRecipeList;