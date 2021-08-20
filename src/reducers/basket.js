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
                ingredients: [],
                menu: [
                    ...state.basket.menu.slice(0, itemIndex),
                    ...state.basket.menu.slice(itemIndex + 1)
                ]
            }

        case 'COUNT_INGREDIENTS':
            const menu = state.basket.menu;
            const ingredients = []; 
            for(let i = 0; i < menu.length; i++){
                ingredients.push(...menu[i].ingrid)
            }

            const unique = ingredients.filter((set => item => !set.has(item.name) && set.add(item.name))(new Set()));
            console.log(unique )
            return{
                ...state.basket,
                ingredients: unique
            }
        
        default:
            return state.basket
    } 
}

export default updateBasket ;