const fetchRequested = () => {
    return{
        type: 'REQUESTED'
    }
}

const fetchLoaded = (items) => {
    return {
        type: 'LOADED',
        payload: items
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

const recipesAddedToMenu = () => {
    return{
        type: 'RECIPES_ADDED_TO_MENU'
    }
}

const onDeleteRecipe = (menuService, dispatch) => (recipe) => {
    menuService.deleteRecipe(recipe.id)
        .then((recipeId) => dispatch(recipesDeleteFromMenu(recipeId)));
}

const onAddedToMenu = (menuService, dispatch) => (recipe, category) =>{
    dispatch(recipesAddedToMenu());
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

const selectCategory = (menuService, dispatch) => (collection, category) => {
    dispatch(fetchRequested())
    menuService.getListByCategory(collection, category)
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