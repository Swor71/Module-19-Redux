import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const THUMBS_UP_COMMENT = 'THUMBS_UP_COMMENT';
export const THUMBS_DOWN_COMMENT = 'THUMBS_DOWN_COMMENT';

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        id: uuid.v4(),
        text
    }
}

export function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

export function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        id
    }
}

export function thumbsUpComment(id) {
    return {
        type: THUMBS_UP_COMMENT,
        id,
    }
}

export function thumbsDownComment(id) {
    return {
        type: THUMBS_DOWN_COMMENT,
        id,
    }
}