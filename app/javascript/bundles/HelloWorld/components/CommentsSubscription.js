import React, {Component} from "react";
import { Query } from 'react-apollo';
import CommentsList from "./CommentsList";
import {GET_COMMENTS, COMMENTS_SUBSCRIPTION} from '../queries';

const CommentsSubscription = ({ post }) => {
  return <Query query={GET_COMMENTS} variables={{postId: post.id}} >
    { ({ subscribeToMore, ...result }) => (
      <CommentsList {...result} subscribeToNewItems={() => {
            subscribeToMore({
              document: COMMENTS_SUBSCRIPTION,
              variables: {postId: post.id},
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newItem = subscriptionData.data.commentAdded;
                if (!prev.comments.find((comment) => comment.id === newItem.id)) {
                  return Object.assign({}, prev,
                     { comments: [newItem, ...prev.comments] });
                } else return prev;
              }
            })
          }
        }
      />
    )}
  </Query>
}
export default CommentsSubscription
