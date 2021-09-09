const updateRecipeCategory = (recipes, id, value) => {
    let recipesCategoryChange = null;
    if(recipes){
        recipesCategoryChange = recipes.map(item => {
            if(item.id === id){
                return{ 
                    ...item,
                    addCategory: value
                }
            }
            return item
        });
    }
    return recipesCategoryChange
}

const recipeChange = (recipes, id, variant) => {
    let recipesChange = null;
    if(recipes){
        recipesChange = recipes.map(item => {
            if(item.id === id){
                return{ 
                    ...item,
                    show: variant
                }
            }
            return item
        })
    }
    return recipesChange
}

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
                    show: 'img',
                    addCategory: false
                }
            })
            return {
                recipes: itemsRecipesLoaded,
                loading: false,
                error: null,
                warning: false
            };

        case 'ERROR':
            return {
                recipes: [],
                loading: false,
                error: payload
            };

        case 'CHANGE_ITEM':
            return {
                ...state.recipeList,
                recipes: recipeChange(state.recipeList.recipes, payload.recipeId, payload.variant),
                foundRecipes: recipeChange(state.recipeList.foundRecipes, payload.recipeId, payload.variant),
              };

        case 'RECIPE_CATEGORY_SELECTED':
            const {recipeId, value} = payload;
            const {recipes, foundRecipes} = state.recipeList
            return{
                ...state.recipeList,
                recipes: updateRecipeCategory(recipes, recipeId, value),
                foundRecipes: updateRecipeCategory(foundRecipes, recipeId, value)
            };
            
        case 'ERROR_ADDIND_RECIPE':
            return{
                ...state.recipeList,
                warning: payload,
                errorAdding: true
            }

        case 'SUCCESS_ADDIND_RECIPE':
            return{
                ...state.recipeList,
                warning: payload,
                errorAdding: false
            }

        case 'SEARCH':
            const filteredRecipes = state.recipeList.recipes.filter(element => {
                return element.title.toLowerCase().indexOf(payload.toLowerCase()) !== -1
            })
            return{
                ...state.recipeList,
                foundRecipes: filteredRecipes
            }
            

        default:
            return state.recipeList;
    }
}

export default updateRecipeList;