const updateText  = (str) => {
    if(str){
        return str[0].toUpperCase() + str.substring(1).toLowerCase()
    }
}

const updateRecipeForm = (state , action) => {
    const {type, payload} = action;

    if (state === undefined) {
        return {
            newRecipe: {
                ingredients: []
            }
        };
    }

    switch(type){
        case 'TITLE_CHANGE':
            return {
                newRecipe: {
                    ...state.form.newRecipe,
                    title: updateText(payload), 
                }
            }

        case 'INGREDIENT_NAME_CHANGE':
            return {
                ...state.form,
                ingredientName: updateText(payload)
            }

        case 'INGREDIENT_WEIGHT_CHANGE':
            return {
                ...state.form,
                ingredientWeight: payload
            }

        case 'ADDED_INGRIDIENT':
            const {ingredientName, ingredientWeight} = state.form;
            const id = Date.now();
            const newIngredient = {
                name: ingredientName, 
                weight: ingredientWeight,
                id
            }
            if(ingredientName && ingredientWeight){
                return {
                    // ingredientName: '', 
                    // ingredientWeight: '',
                    newRecipe: {
                        ...state.form.newRecipe,
                        ingredients: [
                            ...state.form.newRecipe.ingredients,
                            newIngredient
                        ]
                    }
                }
            }
            return{
                ...state.form
            }

        case 'TEXT_CHANGE':
            return {
                newRecipe: {
                    ...state.form.newRecipe,
                    text: payload
                }
            }

        case 'IMAGE_CHANGE':
            return {
                newRecipe: {
                    ...state.form.newRecipe,
                    img: payload
                }
            }
        case 'CATEGORY_CHANGE': 
        return {
            newRecipe: {
                ...state.form.newRecipe,
                category: payload
            }
        }

        case 'ERROR_ADDIND_NEW_RECIPE':
            return{
                ...state.form,
                errorAdding: true
            }

        case 'SUCCESSFUL_ADDIND_NEW_RECIPE':
            return{
                ...state.form,
                successufulAdding: true
            }

        case 'DELETE_INGREDIENT':
            console.log(payload)
            const itemIndex = state.form.newRecipe.ingredients.findIndex(item => item.id === payload);
            console.log(itemIndex)
            return {
                ...state.form,
                newRecipe: {
                    ...state.form.newRecipe,
                    ingredients: [
                        ...state.form.newRecipe.ingredients.slice(0, itemIndex),
                        ...state.form.newRecipe.ingredients.slice(itemIndex + 1)
                    ]
                }
                    
            }

        default:
            return state.form
    } 
}

export default updateRecipeForm;