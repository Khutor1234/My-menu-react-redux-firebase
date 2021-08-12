const fetchLoaded = (items) => {
    return {
        type: 'LOADED',
        payload: items
    }
}

const fetchRequested = () => {
    return{
        type: 'REQUESTED'
    }
}

const fetchError = (error) => {
    return{
        type: 'ERROR',
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

const changeIngrid = (recipeId) => {
    return{
        type: 'CHANGE_INGRID',
        payload: recipeId
    }
}

const changeRecipe = (recipeId) => {
    return{
        type: 'CHANGE_RECIPE',
        payload: recipeId
    }
}

const onCategoryChange = (e) => {
    return e
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
    dispatch(fetchRequested());
    menuService.getLists('recipes')
        .then((data) => dispatch(fetchLoaded(data)))
        .catch((error) => dispatch(fetchError(error)))
}

const fetchMenu = (menuService, dispatch) => () => {
    dispatch(fetchRequested())
    menuService.getLists('menu')
        .then((data) => dispatch(fetchLoaded(data)))
        .catch((error) => dispatch(fetchLoaded(error)))
}

const selectCategory = (menuService, dispatch) => (category) => {
    dispatch(fetchRequested())
    menuService.getListRecipes(category)
        .then((data) => dispatch(fetchLoaded(data)))
        .catch((error) => dispatch(fetchError(error)))
}


export {
    fetchRecipes,
    fetchMenu,
    onAddedToMenu,
    onDeleteRecipe,
    changeImg,
    selectCategory,
    changeRecipe,
    changeIngrid,
    onCategoryChange
}