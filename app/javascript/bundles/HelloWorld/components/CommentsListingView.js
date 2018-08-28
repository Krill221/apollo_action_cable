import React, {Component} from "react";
import {graphql} from 'react-apollo';
import {commentsQuery, commentsSubscription} from '../queries';

import CommentEditorView from './CommentEditorView';


const withCommentsData = graphql(commentsQuery, {options: ({post}) => ({variables: {postId: post.id}})});


class CommentsListingView extends Component {

    componentWillMount() {
        const {post} = this.props;

        this.props.data.subscribeToMore({
            document: commentsSubscription,
            variables: {postId: post.id},
            updateQuery: (previous, {subscriptionData}) => {
                if (!subscriptionData.data) {
                    return previous;
                }

                const newComment = subscriptionData.data.commentAdded;

                if (!previous.comments.find((comment) => comment.id === newComment.id)) {
                    return Object.assign({}, previous, {comments: [newComment, ...previous.comments]});
                } else {
                    return previous;
                }
            }
        });
    }

    render() {
        const {post} = this.props;
        let content = null;
        if (this.props.data) {
            if (this.props.data.loading) {
                content = (<div key={'data-loading'}>Data loading! Please wait...</div>);
            } else if (this.props.data.error) {
                content = (<div className="text-danger" key={'error'}>An error occurred. {this.props.data.error}</div>);
            } else if (this.props.data.comments) {
                content = (
                    <ul key={'comments-list'}>
                        {this.props.data.comments.map((comment) => (<li key={comment.id}>{comment.body}</li>))}
                    </ul>
                )
            }
        }

        return (
            <div>
                <CommentEditorView post={post}/>
                {content}
            </div>
        );
    }
}

export default withCommentsData(CommentsListingView);
