const initialState = {
    recipes: [],
    loading: true,
    error: null,
    menu: []
}

const reducer = (state = initialState, action) => {

    console.log(action.type);


    switch(action.type){
        case 'RECIPES_REQUESTED':
            return{
                ...state,
                recipes: [],
                loading: true,
                error: null
            };

        case 'RECIPES_LOADED':
            return {
                ...state,
                recipes: action.payload,
                loading: false,
                error: null
            };

        case 'RECIPES_ERROR':
            return {
                ...state,
                recipes: [],
                loading: false,
                error: action.payload
            };

        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: null
            };

        default:
            return state
    } 
}

export default reducer;