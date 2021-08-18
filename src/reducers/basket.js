const updateBasket = (state, action) => {
    const {type, payload} = action;

    if (state === undefined) {
        return {
          menu: [],
          loading: true,
          error: null
        };
    }

    console.log(type)

    switch(type){

        case 'LOADED':
            return {
                menu: payload,
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
                error: payload
            };
        
        case 'RECIPES_DELETE_FROM_MENU':
            const itemIndex = state.basket.menu.findIndex(item => item.id === payload);
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