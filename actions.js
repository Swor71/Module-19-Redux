import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const THUMBS_UP_COMMENT = 'THUMBS_UP_COMMENT';
const THUMBS_DOWN_COMMENT = 'THUMBS_DOWN_COMMENT';


function addComment(text) {
    return {
        type: ADD_COMMENT,
        id: uuid.v4(),
        text
    }
}

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        id
    }
}

function thumbsUpComment(id) {
    return {
        type: THUMBS_UP_COMMENT,
        id,
    }
}

function thumbsDownComment(id) {
    return {
        type: THUMBS_DOWN_COMMENT,
        id,
    }
}