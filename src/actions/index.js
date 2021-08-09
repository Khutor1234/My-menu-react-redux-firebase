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

const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return{
        type: 'MENU_REQUESTED'
    }
}

const menuError = (error) => {
    return{
        type: 'MENU_ERROR',
        payload: error
    }
}

const recipesDeleteFromMenu  = (recipeId) => {
    return{
        type: 'RECIPES_DELETE_FROM_MENU',
        payload: recipeId
    }
}

const deleteRecipe = (menuService, dispatch) => (recipeId) => {
    menuService.deleteRecipe(recipeId)
        .then((recipeId) => dispatch(recipesDeleteFromMenu(recipeId)));
}

const onAddedToCart = (menuService) => (recipe, category) =>{
    menuService.createMenu({
        title: recipe.title,
        category
    })
}

const fetchRecipes = (menuService, dispatch) => () => {
    dispatch(recipesRequested());
    menuService.getLists()
        .then((data) => dispatch(recipesLoaded(data)))
        .catch((error) => dispatch(recipesError(error)))
}

const fetchMenu = (menuService, dispatch) => () => {
    dispatch(menuRequested())
    menuService.getMenu()
        .then((data) => dispatch(menuLoaded(data)))
        .catch((error) => dispatch(menuError(error)))
}




export {
    fetchRecipes,
    fetchMenu,
    onAddedToCart,
    deleteRecipe
}