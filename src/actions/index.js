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

const changeImg = (recipeId) => {
    return{
        type: 'CHANGE_IMG',
        payload: recipeId
    }
}

const selectCategory = (category) => {
    return{
        type: 'SELECT_CATEGORY',
        payload: category
    }
}

const onDeleteRecipe = (menuService, dispatch) => (recipeId) => {
    menuService.deleteRecipe(recipeId)
        .then((recipeId) => dispatch(recipesDeleteFromMenu(recipeId)));
}

const onAddedToMenu = (menuService) => (recipe, category) =>{
    menuService.createMenu({
        title: recipe.title,
        category: category
    })
}

const fetchRecipes = (menuService, dispatch) => () => {
    dispatch(recipesRequested());
    menuService.getRecipes()
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
    onAddedToMenu,
    onDeleteRecipe,
    changeImg,
    selectCategory
}