import commit_actionTypes from './commit.types'

const INITIAL_STATE = {
    repo: '',
    commits: []
}

const commitReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case commit_actionTypes.SET_REPO:
            return {
                ...state,
                repo: action.payload
            }
        case commit_actionTypes.SET_COMMITS:
            return {
                ...state,
                commits: action.payload
            }

        default:
            return { ...state }
    }
}

export default commitReducer