import React, {Component} from "react";
import {graphql} from 'react-apollo';
import PostEditorView from "./PostEditorView";
import PostView from "./PostView";
import {postsQuery, postsSubscription} from '../queries';


const withPostsData = graphql(postsQuery);

class PostsListingView extends Component {


    componentWillMount() {

        this.props.data.subscribeToMore({
            document: postsSubscription,
            variables: {},
            updateQuery: (previous, {subscriptionData}) => {
                if (!subscriptionData.data) {
                    return previous;
                }

                const newPost = subscriptionData.data.postAdded;

                if (!previous.posts.find((post) => post.id === newPost.id)) {
                    return Object.assign({}, previous, {posts: [newPost, ...previous.posts]});
                } else {
                    return previous;
                }
            }
        });
    }

    render() {
        let content = (<div>&nbsp;</div>);
        let {data} = this.props;


        if (data) {
            if (data.loading) {
                content = (<div key={'data-loading'}>Data loading! Please wait...</div>);
            } else if (data.error) {
                content = (<div key={'error'}>An error occurred. {data.error}</div>);
            } else if (data.posts) {
                content = data.posts.map( post => (
                    <PostView post={post} key={post.id.toString()}/>
                  )
                )
            }
        }

        return (
            <div>
                <PostEditorView/>
                {content}
            </div>
        );
    }
}

export default withPostsData(PostsListingView);
