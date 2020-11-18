import React, { useEffect } from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCommitRepo } from '../../redux/commit/commit.selectors'
import { selectUserUsername } from '../../redux/user/user.selectors'

import { setCommits } from '../../redux/commit/commit.actions'

const CommitPage = ({ match, selectCommitRepo, selectUserUsername, setCommits }) => {

    useEffect(() => {
        fetch(`https://api.github.com/repos/${selectUserUsername}/${selectCommitRepo}/commits`)
            .then(res => res.json())
            // .then(console.log)
            .then(res => setCommits(res))
            .catch(err => err.message)
    },[])

    return (
        <div>
            {console.log(match.params)}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    selectUserUsername: selectUserUsername,
    selectCommitRepo: selectCommitRepo
})

const mapDispatchToProps = (dispatch) => ({
    setCommits: (commmits) => dispatch(setCommits(commmits))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommitPage);