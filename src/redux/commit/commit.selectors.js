import { createSelector } from 'reselect'

export const selectCommit = (state) => state.commit

export const selectCommitRepo = createSelector(
    selectCommit,
    (state) => state.repo
)

export const selectCommitList = createSelector(
    selectCommit,
    state => state.commits
)