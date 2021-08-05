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

const onAddedToCart = (menuService) => (recipe) =>{
    menuService.createMenu(recipe)
}


export {
    fetchRecipes,
    fetchMenu,
    onAddedToCart
}