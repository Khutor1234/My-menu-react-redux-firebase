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

const onChangeItem = (recipeId, variant) => {
    return{
        type: 'CHANGE_ITEM',
        payload: {
            recipeId,
            variant
        }
    }
}

const onTitleChange = (e) => {
    return{
        type: 'TITLE_CHANGE',
        payload: e
    }
}

const onIngredientNameChange = (e) => {
    return{
        type: 'INGREDIENT_NAME_CHANGE',
        payload: e
    }
}

const onIngredientWeightChange = (e) => {
    return{
        type: 'INGREDIENT_WEIGHT_CHANGE',
        payload: e
    }
}

const onAddedIngredient = () => {
    return{
        type: 'ADDED_INGRIDIENT',
    }
}

const onTextChange = (e) => {
    return{
        type: 'TEXT_CHANGE',
        payload: e
    }
}

const onImgChange = (e) => {
    return{
        type: 'IMAGE_CHANGE',
        payload: e
    }
}

const onCategoryFormChange = (e) => {
    return{
        type: 'CATEGORY_CHANGE',
        payload: e
    }
}

const onCategoryChange = (value, recipeId) => {
    return {
        type: 'RECIPE_CATEGORY_SELECTED',
        payload: {
            value: value,
            recipeId: recipeId
        }
    }
}

const errorAddingRecipe = (text) => {
    return{
        type: 'ERROR_ADDIND_RECIPE',
        payload: text
    }
}

const onCountIngredients = () => {
    return{
        type: 'COUNT_INGREDIENTS',
    }
}

const errorAddingNewRecipe = () => {
    return{
        type: 'ERROR_ADDIND_NEW_RECIPE',
    }
}

const successfulAddingNewRecipe = () => {
    return{
        type: 'SUCCESSFUL_ADDIND_NEW_RECIPE',
    }
}

const onDeleteIngredient = (id) => {
    return{
        type: 'DELETE_INGREDIENT',
        payload: id
    }
}

const deleteMenu = () => {
    return{
        type: 'DELETE_MENU'
    }
}

const onDeleteRecipe = (menuService, dispatch) => (recipe) => {
    menuService.deleteRecipe(recipe.id)
        .then((recipeId) => dispatch(recipesDeleteFromMenu(recipeId)));
}

const onAddedToMenu = (menuService, dispatch) => (recipe, category) =>{
    menuService.getLists('menu')
        .then((data) => addedToMenu(menuService, dispatch, data, recipe, category))
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

const onAddedToRecipes = (menuService, dispatch) => (e, newRecipe) => {
    if(newRecipe.title && newRecipe.ingredients && newRecipe.text && newRecipe.category){
        menuService.createItem('recipes', newRecipe);
        dispatch(successfulAddingNewRecipe())
    } else {
        e.preventDefault();
        dispatch(errorAddingNewRecipe())
    }
    
}

const onDeleteMenu = (menuService, dispatch) => () => {
    dispatch(deleteMenu())
}


export {
    fetchRecipes,
    fetchMenu,
    onAddedToMenu,
    onDeleteRecipe,
    selectCategory,
    onChangeItem,
    onCategoryChange,
    onCountIngredients,
    onTitleChange, 
    onIngredientNameChange,
    onIngredientWeightChange,
    onTextChange,
    onCategoryFormChange,
    onAddedIngredient,
    onAddedToRecipes,
    onDeleteIngredient,
    onImgChange,
    onDeleteMenu
}

const addedToMenu = (menuService, dispatch, data, recipe, category) => {
    const menu ={
        breakfast: data.filter(item => item.category === 'Завтрак'),
        lunch: data.filter(item => item.category === 'Обед'),
        diner: data.filter(item => item.category === 'Ужин')
    }
    if(category === 'Завтрак' && menu.breakfast.length < 7){
        menuService.createItem('menu', recipe)
    } else if(category === 'Обед' && menu.lunch.length < 7){
        menuService.createItem('menu', recipe)
    }
    else if(category === 'Ужин' && menu.diner.length < 7){
        menuService.createItem('menu', recipe)
    } 
    else if(!category){
        dispatch(errorAddingRecipe('Вы не выбрали время приема еды'))
    }
    else {
        dispatch(errorAddingRecipe(`Попробуй посмотреть корзину. ${category}ы уже выбраны`))
    }
}

