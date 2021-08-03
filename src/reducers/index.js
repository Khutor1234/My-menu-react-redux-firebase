const initialState = {
    recipes: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'RECIPES_LOADED':
            return {
                recipes: action.payload
            };
        default:
            return state
    } 
}

export default reducer;