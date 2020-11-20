import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCommitRepo, selectCommitList } from '../../redux/commit/commit.selectors'
import { selectUserUsername } from '../../redux/user/user.selectors'

import { setCommits, setRepo } from '../../redux/commit/commit.actions'

import WithSpinner from '../../HOC/WithSpinner.component';
import CommitList from '../../containers/commitList/commitList.component';

const CommitListWithSpinner = WithSpinner(CommitList)


const CommitPage = ({ match, selectCommitRepo, selectUserUsername, setCommits, setRepo, selectCommitList }) => {

    const [commtPage_isLoading, setCommtPage_isLoading] = useState(true)


    useEffect(() => {
        const fetching = async () => {
            // alert('ss')
            setCommtPage_isLoading(true)
            await setRepo(match.params.name)
            // await console.log(selectCommitRepo)

            // if(!selectCommitRepo) return
            await fetch(`https://api.github.com/repos/${selectUserUsername}/${match.params.name}/commits`)
                .then(res => res.json())
                // .then(console.log)
                .then(res => setCommits(res))
                .then(setCommtPage_isLoading(false))
                .catch(err => { console.log(err.message) })
        }
        fetching()

        return () => {
            setCommtPage_isLoading(true)
            // alert('unmo')
        }
    }, [])

    let x = 0
    // if(commtPage_isLoading)alert(commtPage_isLoading)
    // alert(commtPage_isLoading)
    return (
        <div className='container text-center'>
            {
                // console.log(selectCommitList == false)
                selectCommitList.length ?
                    selectCommitList.map(({ author, commit, url, sha }, index) => (
                        <CommitListWithSpinner isLoading={commtPage_isLoading} author={author} commit={commit} url={url} sha={sha} index={index + 1} />
                    ))
                    :
                    null
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    selectUserUsername: selectUserUsername,
    selectCommitRepo: selectCommitRepo,
    selectCommitList: selectCommitList
})

const mapDispatchToProps = (dispatch) => ({
    setCommits: (commmits) => dispatch(setCommits(commmits)),
    setRepo: repo => dispatch(setRepo(repo))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommitPage);