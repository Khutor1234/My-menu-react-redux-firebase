const updateRecipeList = (state, action) => {
    const {type, payload} = action;

    if (state === undefined) {
        return {
          recipes: [],
          loading: true,
          error: null
        };
    }

    console.log(state);

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