const initialState = {
    recipes: [],
    loading: true,
    error: null,
    cartItems: []
}

const reducer = (state = initialState, action) => {

    console.log(action.type);


    switch(action.type){
        case 'RECIPES_REQUESTED':
            return{
                ...state,
                recipes: [],
                loading: true,
                error: null
            };

        case 'RECIPES_LOADED':
            return {
                ...state,
                recipes: action.payload,
                loading: false,
                error: null
            };

        case 'RECIPES_ERROR':
            return {
                ...state,
                recipes: [],
                loading: false,
                error: action.payload
            };

        case 'RECIPE_ADDED_TO_CART':
            const recipeId = action.payload;
            const recipe = state.recipes.find((recipe) => recipe.id === recipeId );
            const newItem = {
                recipeId: recipe.recipeId,
                title: recipe.title
            };
            console.log(newItem)
            return{
                ...state,
                cartItems: [
                    ...state.cartItems,
                    newItem
                ]
            };

        default:
            return state
    } 
}

export default reducer;