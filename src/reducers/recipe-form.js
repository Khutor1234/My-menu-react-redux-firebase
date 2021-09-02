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
                    title: payload
                }
            }

        case 'INGREDIENT_NAME_CHANGE':
            return {
                ...state.form,
                ingredientName: payload
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
                name: ingredientName[0].toUpperCase() + ingredientName.substring(1).toLowerCase(), 
                weight: ingredientWeight,
                id
            }
            // console.log(newIngredient, 'ingred')
            // if(typeof(ingredientWeight) !== 'number'){
            //     return{
            //         ...state.form,
            //         error: 'Не число'    
            //     }
            // } else{
                return {
                    newRecipe: {
                        ...state.form.newRecipe,
                        ingredients: [
                            ...state.form.newRecipe.ingredients,
                            newIngredient
                        ]
                    }
                }
            // }
           

        case 'TEXT_CHANGE':
            return {
                newRecipe: {
                    ...state.form.newRecipe,
                    text: payload
                }
            }

        case 'CATEGORY_CHANGE': 
        return {
            newRecipe: {
                ...state.form.newRecipe,
                category: payload
            }
        }

        default:
            return state.form
    } 
}

export default updateRecipeForm;