import React from 'react';
import CommitItem from '../../components/commitItem/commitItem.component';

const CommitList = ({sha,url,commit,author, index}) => {
    return (
        <div>
            <a key={sha} href={url} className='my-3 d-flex align-items-center' >
                <span className='mr-2'>{index}</span>
                {/* {console.log('commtPage_isLoading', commtPage_isLoading)} */}
                <CommitItem author={author} commit={commit} />
            </a>
        </div>
    );
};

export default CommitList;