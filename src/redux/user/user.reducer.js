import user_actionTypes from './user.types'

const INITIAL_STATE = {
    username: '',
    pass: '',
    auth: false,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case user_actionTypes.SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case user_actionTypes.SET_PASS:
            return {
                ...state,
                pass: action.payload
            }
        case user_actionTypes.SET_AUTH:
            return {
                ...state,
                auth: action.payload
            }



        default:
            return { ...state }
    }
}

export default userReducer