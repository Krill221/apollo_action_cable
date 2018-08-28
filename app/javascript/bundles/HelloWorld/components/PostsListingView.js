import React, {Component} from "react";
import { Query } from 'react-apollo';
import PostsPage from "./PostsPage";
import {GET_POSTS, POSTS_SUBSCRIPTION} from '../queries';

const PostsListingView = ({ params }) => (
  <Query query={GET_POSTS}>
    {({ subscribeToMore, ...result }) => (
      <PostsPage {...result}
        subscribeToNewPosts={() =>
          subscribeToMore({
            document: POSTS_SUBSCRIPTION,
            variables: {},
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              const newPost = subscriptionData.data.postAdded;
              if (!prev.posts.find((post) => post.id === newPost.id)) {
                return Object.assign({}, prev,
                   { posts: [newPost, ...prev.posts]
                   });
              } else return prev;
            }
          })
        }
      />
    )}
  </Query>
)


export default PostsListingView;

//const withPostsData = graphql(GET_POSTS);
//export default withPostsData(PostsListingView);
