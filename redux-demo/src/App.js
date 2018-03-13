import React, { Component } from 'react';
import './App.css';
import CommentList from './CommentsList';
import Comment from './Comment';
import CommentsListContainer from './CommentsListContainer';

const App = () => {
    return (
        <div className="App">
            <CommentsListContainer />
        </div>
    );
};

export default App;
