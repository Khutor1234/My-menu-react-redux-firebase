const updateUser = (state , action) => {
    const {type, payload} = action;

    if (state === undefined) {
        return {
            user: null
        };
    }

    switch(type){
        case 'EMAIL_CHANGE':
            return {
                ...state.user,
                email: payload
            }

        case 'PASSWORD_CHANGE':
            return {
                ...state.user,
                password: payload
            }

        default:
            return state.user
    } 
}

export default updateUser;