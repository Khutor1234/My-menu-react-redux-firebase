const recipesLoaded = (newRecipes) => {
    return {
        type: 'RECIPES_LOADED',
        payload: newRecipes
    }
}

const recipesRequested = () => {
    return{
        type: 'RECIPES_REQUESTED'
    }
}

const recipesError = (error) => {
    return{
        type: 'RECIPES_ERROR',
        payload: error
    }
}

const fetchRecipes = (menuService, dispatch) => () => {
    dispatch(recipesRequested());
    menuService.getLists()
        .then((data) => dispatch(recipesLoaded(data)))
        .catch((error) => dispatch(recipesError(error)))
}

const recipeAddedToCart = (recipeId) => {
    return{
        type: 'RECIPE_ADDED_TO_CART',
        payload: recipeId
    }
}

export {
    fetchRecipes,
    recipeAddedToCart
}