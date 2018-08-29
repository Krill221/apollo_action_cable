import React, {Component} from "react";
import { Query } from 'react-apollo';
import PostsListingView from "./PostsListingView";
import {GET_POSTS, POSTS_SUBSCRIPTION} from '../queries';

const PostsPage = ({ params }) => (
  <Query query={GET_POSTS}>
    { ({ subscribeToMore, ...result }) => (
      <PostsListingView {...result} subscribeToNewPosts={() =>
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
export default PostsPage
