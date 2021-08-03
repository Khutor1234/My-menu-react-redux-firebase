const recipesLoaded = (newRecipes) => {
    return {
        type: 'RECIPES_LOADED',
        payload: newRecipes
    }
}

export {
    recipesLoaded
}