import React, {Component} from "react";
import { Query } from 'react-apollo';
import PostsList from "./PostsList";
import {GET_POSTS, ADD_POSTS_SUBSCRIPTION} from '../queries';

const PostsSubscription = () => (
  <Query query={GET_POSTS}>
    { ({ subscribeToMore, ...result }) => (
      <PostsList {...result} subscribeToNewItems={() =>
          subscribeToMore({
            document: ADD_POSTS_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              console.log(subscriptionData.data);
              const newItem = subscriptionData.data.postAdded;
              if (!prev.posts.find((post) => post.id === newItem.id)) {
                  return Object.assign({}, prev,
                     { posts: [newItem, ...prev.posts]
                     });
              } else return prev;
            }
          })
        }
      />
    )}
  </Query>
)
export default PostsSubscription
