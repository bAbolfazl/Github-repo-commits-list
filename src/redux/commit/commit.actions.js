import commit_actionTypes from './commit.types'

export const setRepo = (repo) => ({
    type: commit_actionTypes.SET_REPO,
    payload: repo,
})

export const setCommits = (commits) => ({
    type: commit_actionTypes.SET_COMMITS,
    payload: commits
})