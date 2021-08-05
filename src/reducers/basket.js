
const updateBasket = (state, action) => {

    if (state === undefined) {
        return {
          menu: [],
          loading: true,
          error: null
        };
      }

    switch(action.type){

        case 'MENU_LOADED':
            return {
                menu: action.payload,
                loading: false,
                error: null
            };
            
        case 'MENU_REQUESTED':
            return{
                recipes: [],
                loading: true,
                error: null
            };

        case 'MENU_ERROR':
            return {
                recipes: [],
                loading: false,
                error: action.payload
            };

        default:
            return state.basket
    } 
}

export default updateBasket ;