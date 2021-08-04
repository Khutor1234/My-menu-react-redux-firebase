const initialState = {
    recipes: [],
    loading: true,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'RECIPES_REQUESTED':
            return{
                recipes: [],
                loading: true,
                error: null
            };
        case 'RECIPES_LOADED':
            return {
                recipes: action.payload,
                loading: false,
                error: null
            };
        case 'RECIPES_ERROR':
            return {
                recipes: [],
                loading: false,
                error: action.payload
            }
        default:
            return state
    } 
}

export default reducer;