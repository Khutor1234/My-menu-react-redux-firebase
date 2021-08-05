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

const fetchRecipes = (menuService, dispatch) => () => {
    dispatch(recipesRequested());
    menuService.getLists()
        .then((data) => dispatch(recipesLoaded(data)))
        .catch((error) => dispatch(recipesError(error)))
}

const fetchMenu = (menuService, dispatch) => () => {
    menuService.getMenu()
        .then((data) => dispatch(menuLoaded(data)))
}

const onAddedToCart = (menuService) => (recipe) =>{
    console.log(recipe);
    menuService.createMenu(recipe)
}


export {
    fetchRecipes,
    fetchMenu,
    onAddedToCart
}