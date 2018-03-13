import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './user.js'

const reducer = combineReducers({
    comments,
    users
});

export default reducer;