const updateBasket = (state, action) => {
    const {type, payload} = action;

    if (state === undefined) {
        return {
          menu: [],
          loading: true,
          error: null
        };
      }

    console.log(payload)

    switch(type){

        case 'LOADED':
            const breakfast = payload.filter(item => item.category === 'Завтрак');
            const lunch = payload.filter(item => item.category === 'Обед');
            const diner = payload.filter(item => item.category === 'Ужин');
            console.log(breakfast, 'Завтрак');
            console.log(lunch, 'Обед');
            console.log(diner, 'Ужин');
            
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
            const itemIndex = state.basket.menu.findIndex(item => item.id === action)
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