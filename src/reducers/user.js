const updateUser = (state , action) => {
    const {type, payload} = action;

    if (state === undefined) {
        return {
            user: null
        };
    }

    switch(type){
        case 'LOG_IN':
            const email = payload.email
            return{
                user: email
            };
        
        case 'LOG_OUT':
            return{
                user: null
            };

        default:
            return state.user
    } 
}

export default updateUser;