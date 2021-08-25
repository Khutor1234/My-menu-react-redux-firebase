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
        type: 'RECIPES_ADDED_TO_MENU',
    }
}

const onCountIngrid = () => {
    return{
        type: 'COUNT_INGREDIENTS',
    }
}

const onDeleteRecipe = (menuService, dispatch) => (recipe) => {
    menuService.deleteRecipe(recipe.id)
        .then((recipeId) => dispatch(recipesDeleteFromMenu(recipeId)));
}

const onAddedToMenu = (menuService, dispatch) => (recipe, category) =>{
    menuService.getLists('menu')
        .then((data) => {
            const menu ={
                breakfast: data.filter(item => item.category === 'Завтрак'),
                lunch: data.filter(item => item.category === 'Обед'),
                diner: data.filter(item => item.category === 'Ужин')
            }
            if(category === 'Завтрак' && menu.breakfast.length < 7){
                menuService.createItem('menu', {
                    title: recipe.title,
                    ingrid: recipe.ingrid,
                    category: category
                })
            } else if(category === 'Обед' && menu.lunch.length < 7){
                menuService.createItem('menu', {
                    title: recipe.title,
                    ingrid: recipe.ingrid,
                    category: category
                })
            }
            else if(category === 'Ужин' && menu.diner.length < 7){
                menuService.createItem('menu', {
                    title: recipe.title,
                    ingrid: recipe.ingrid,
                    category: category
                })
            } else {
                dispatch(recipesAddedToMenu())
            }
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
    onCategoryChange,
    onCountIngrid
}