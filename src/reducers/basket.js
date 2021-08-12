
const updateBasket = (state, action) => {

    if (state === undefined) {
        return {
          menu: [],
          loading: true,
          error: null
        };
      }

    switch(action.type){

        case 'LOADED':
            return {
                menu: action.payload,
                loading: false,
                error: null
            };
            
        case 'REQUESTED':
            return{
                menu: [],
                loading: true,
                error: null
            };

        case 'ERROR':
            return {
                menu: [],
                loading: false,
                error: action.payload
            };
        
        case 'RECIPES_ADDED_TO_MENU':
            return{
                ...state.basket,
                menu: [...state.basket.menu, action.payload]
            }
    
        
        case 'RECIPES_DELETE_FROM_MENU':
            const idx = action.payload;
            const itemIndex = state.basket.menu.findIndex(item => item.id === idx)
            return {
                ...state.basket,
                menu: [
                    ...state.basket.menu.slice(0, itemIndex),
                    ...state.basket.menu.slice(itemIndex + 1)
                ]
            }
        
        default:
            return state.basket
    } 
}

export default updateBasket ;