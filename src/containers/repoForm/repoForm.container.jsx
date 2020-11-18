import React from 'react';

import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCommitRepo } from '../../redux/commit/commit.selectors';

import CustomInput from '../../components/customInput/customInput.component';

const RepoForm = ({ repo }) => {
    return (
        <div className="text-center">
            <CustomInput type='text' label="Github repository" state="repo" />
            <Link to={`/repo/${repo ? repo: null}`}>
                <button className="btn btn-primary w-50 mt-4">Sumbit</button>
            </Link>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    repo: selectCommitRepo
})

export default connect(mapStateToProps)(RepoForm);