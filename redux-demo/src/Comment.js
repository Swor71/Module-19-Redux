import React from 'react';
import { 
    thumbsUpComment, 
    thumbsDownComment,
    deleteComment
    } from './actions';
import './Comment.css';

const Comment = ({text, votes, id, thumbsUpComment, thumbsDownComment, deleteComment}) => 
    <li className={'comment'}>{text} 
        <span className={'votes'}>Votes: {votes}
            <div className={'buttons'}>
                <button onClick={() => thumbsUpComment(id)}><i class="far fa-thumbs-up"></i></button>
                <button onClick={() => thumbsDownComment(id)}><i class="far fa-thumbs-down"></i></button>
                <button onClick={() => deleteComment(id)}><i class="far fa-trash-alt"></i></button>
            </div>
        </span>
    </li>;

export default Comment;