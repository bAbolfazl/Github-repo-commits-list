import React , {Fragment} from 'react';
import { CommitItemS } from './commitItem.styles';

const CommitItem = ({ author, commit }) => {
    return (
        <div>
            <CommitItemS className='btn'>
                <img className="img" src={author.avatar_url} alt="" />
                <span className='ml-2'>{commit.author.name}</span>
                <span className='ml-2 small text-muted'>{commit.message}</span>
            </CommitItemS>
        </div>
    );
};

export default CommitItem;