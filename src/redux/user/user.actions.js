import user_actionTypes from './user.types'

export const setUsername = (username) => ({
    type: user_actionTypes.SET_USERNAME,
    payload: username
})

export const setPass = (pass) => ({
    type: user_actionTypes.SET_PASS,
    payload: pass
})

export const setAuth = (status) => ({
    type: user_actionTypes.SET_AUTH,
    payload: status
})