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

const logIn = (user) => {
    return{
        type: 'LOG_IN',
        payload: user
    }
}

const logOut = () => {
    return{
        type: 'LOG_OUT',
    }
}

const onLogIn  = (menuService, dispatch) => (provider) => {
    menuService.logIn(provider)
}

const onLogOut  = (menuService, dispatch) => () => {
    menuService.logOut()
}

const fetchAuth = (menuService, dispatch) => () => {
    menuService.getUser(user => {  
        if(user){
            dispatch(logIn(user))
        } else {
            dispatch(logOut())
        }
    })       
}

const fetchRecipes = (menuService, dispatch) => () => {
    dispatch(fetchRequested());
    menuService.getLists('recipes')
        .then((data) => dispatch(fetchLoaded(data)))
        .catch((error) => dispatch(fetchError(error)))
}

const fetchMenu = (menuService, dispatch) => (user) => {
    dispatch(fetchRequested())
    menuService.getMenuByUser(user)
        .then((data) => dispatch(fetchLoaded(data)))
        .catch((error) => dispatch(fetchLoaded(error)))
}

const onAddedToRecipes = (menuService, dispatch) => (e, newRecipe) => {
    console.log(newRecipe)
    if(!newRecipe.title || !newRecipe.text || !newRecipe.category){
        e.preventDefault();
        dispatch(errorAddingNewRecipe())
    } else {
        menuService.createItem('recipes', newRecipe);
    }
}

const onAddedToMenu = (menuService, dispatch) => (recipe, category, user) =>{
    menuService.getLists('menu')
        .then((data) => {
            const menu ={
                breakfast: data.filter(item => item.category === 'Завтрак' && item.user === user),
                lunch: data.filter(item => item.category === 'Обед' && item.user === user),
                diner: data.filter(item => item.category === 'Ужин' && item.user === user)
            }
            const addRecipe = () => {
                menuService.createItem('menu', {
                    category: category,
                    ingredients: recipe.ingredients,
                    img: recipe.img,
                    title: recipe.title,
                    text: recipe.text,
                    user: user
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
    fetchAuth,
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
    onLogIn,
    onLogOut
}
