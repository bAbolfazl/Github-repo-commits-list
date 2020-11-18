import { createSelector } from 'reselect'

const selectUser = state => state.user

export const selectUserUsername = createSelector(
    selectUser,
    user => user.username
)

// export const selectUser