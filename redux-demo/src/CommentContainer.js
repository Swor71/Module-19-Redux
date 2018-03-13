import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbsUpComment, thumbsDownComment, deleteComment} from './actions';

const mapDispatchToProps = dispatch => ({
    thumbsUpComment: (id) => dispatch(thumbsUpComment(id)),
    thumbsDownComment: (id) => dispatch(thumbsDownComment(id)),
    deleteComment: (id) => dispatch(deleteComment(id)),
});

export default connect(null, mapDispatchToProps)(Comment);