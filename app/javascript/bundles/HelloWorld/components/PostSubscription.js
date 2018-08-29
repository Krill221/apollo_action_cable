import React, {Component} from "react";
import { Query } from 'react-apollo';
import Post from "./Post";
import {GET_POST, UPDATE_POSTS_SUBSCRIPTION} from '../queries';

const PostSubscription = ({ post }) => {
  return <Query query={GET_POST} variables={{id: post.id}} >
    { ({ subscribeToMore, ...result }) => (
      <Post {...result} subscribeToNewItem={() =>
          subscribeToMore({
            document: UPDATE_POSTS_SUBSCRIPTION,
            variables: {id: post.id},
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              const postUpdated = subscriptionData.data.postUpdated;
              return Object.assign({}, prev, { post: postUpdated });
            }
          })
        }
      />
    )}
  </Query>
}
export default PostSubscription
