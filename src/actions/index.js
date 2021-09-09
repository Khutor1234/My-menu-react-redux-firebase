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

const onEmailChange = (e) => {
    return{
        type: 'EMAIL_CHANGE',
        payload: e
    }
}

const onPasswordChange = (e) => {
    return{
        type: 'PASSWORD_CHANGE',
        payload: e
    }
}

const onSearch = (e) => {
    return{
        type: 'SEARCH',
        payload: e
    }
}

const recipesDeleteFromMenu  = (recipeId) => {
    return{
        type: 'RECIPES_DELETE_FROM_MENU',
        payload: recipeId
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

const successAddingRecipe = (text) => {
    return{
        type: 'SUCCESS_ADDIND_RECIPE',
        payload: text
    }
}

const deleteMenu = () => {
    return{
        type: 'DELETE_MENU'
    }
}

const onCountIngredients = () => {
    return{
        type: 'COUNT_INGREDIENTS',
    }
}

const onCountPeople = (e) => {
    return{
        type: 'COUNT_PEOPLE',
        payload: e
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

const onDeleteIngredient = (id) => {
    return{
        type: 'DELETE_INGREDIENT',
        payload: id
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

const errorAddingNewRecipe = () => {
    return{
        type: 'ERROR_ADDIND_NEW_RECIPE',
    }
}

const onCategoryFormChange = (e) => {
    return{
        type: 'CATEGORY_CHANGE',
        payload: e
    }
}

const onLogIn  = (menuService, dispatch) => (e, email, password) => {
    console.log(email, password)
    menuService.logInUser(email, password)
        .then((data) => console.log(data))
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

const onAddedToRecipes = (menuService, dispatch) => (e, newRecipe) => {
    if(newRecipe.title && newRecipe.ingredients && newRecipe.text && newRecipe.category){
        menuService.createItem('recipes', newRecipe);
    } else {
        e.preventDefault();
        dispatch(errorAddingNewRecipe())
    }
    
}

const onAddedToMenu = (menuService, dispatch) => (recipe, category) =>{
    console.log(recipe)
    menuService.getLists('menu')
        .then((data) => {
            const menu ={
                breakfast: data.filter(item => item.category === 'Завтрак'),
                lunch: data.filter(item => item.category === 'Обед'),
                diner: data.filter(item => item.category === 'Ужин')
            }
            const addRecipe = () => {
                menuService.createItem('menu', {
                    category: category,
                    ingredients: recipe.ingredients,
                    img: recipe.img,
                    title: recipe.title,
                    text: recipe.text
                });
                dispatch(successAddingRecipe(`Вы добавили ${category}(${recipe.title}).`))
            }
            if(category === 'Завтрак' && menu.breakfast.length < 7){
                addRecipe()
            } else if(category === 'Обед' && menu.lunch.length < 7){
                addRecipe()
            }
            else if(category === 'Ужин' && menu.diner.length < 7){
                addRecipe()
            } 
            else if(!category){
                dispatch(errorAddingRecipe('Вы не выбрали время приема еды'))
            }
            else {
                dispatch(errorAddingRecipe(`Попробуй посмотреть корзину. ${category}ы уже выбраны`))
            }
        })
}

const onDeleteRecipe = (menuService, dispatch) => (recipe) => {
    menuService.deleteRecipe(recipe.id)
        .then((recipeId) => dispatch(recipesDeleteFromMenu(recipeId)));
}

const onDeleteMenu = (menuService, dispatch) => (menu) => {
    for(let i = 0; i < menu.length; i++){
        menuService.deleteRecipe(menu[i].id)
    }
    dispatch(deleteMenu())
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
    onDeleteMenu,
    onCountPeople,
    onSearch,
    onEmailChange,
    onPasswordChange,
    onLogIn
}
