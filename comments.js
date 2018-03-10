import {
    ADD_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    THUMBS_UP_COMMENT,
    THUMBS_DOWN_COMMENT
} from './actions'

function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state.comments];
        case DELETE_COMMENT:
            return [
                state.filter(comment => comment.id !== action.id)
            ];
        case EDIT_COMMENT:
            return [
                state.map(comment => {
                    if (comment.id == action.id) {
                        return Object.assign({}, comment, {
                            text: action.text
                        });
                    }
                })
            ];
        case THUMBS_UP_COMMENT:
            return [
                state.map(comment => {
                    if (comment.id == action.id) {
                        return Object.assign({}, comment, {
                            votes: comment.votes + 1
                        });
                    }
                })
            ];
        case THUMBS_DOWN_COMMENT:
            return [
                state.map(comment => {
                    if (comment.id == action.id) {
                        return Object.assign({}, comment, {
                            votes: comment.votes - 1
                        });
                    }
                })
            ];
        default:
            return state;
    }
}

export default comments;