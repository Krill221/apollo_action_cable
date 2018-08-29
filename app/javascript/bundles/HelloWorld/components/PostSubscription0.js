import React, {Component} from "react";
import { Subscription } from 'react-apollo';
import Post from "./Post";
import {GET_POST, UPDATE_POSTS_SUBSCRIPTION} from '../queries';
import AddComment from './AddComment';
import UpdatePost from './UpdatePost';
import CommentsSubscription from "./CommentsSubscription";

const PostSubscription = ({ post }) => (
  <div>
    <Subscription subscription={UPDATE_POSTS_SUBSCRIPTION} variables={{ id: post.id }} >
      { ({ data, loading }) => {
        let params_post;
        if (loading)
          params_post = post
        else
          params_post = data.postUpdated

        return <Post post={params_post} />
      }}
    </Subscription>
    <UpdatePost post={post}/>
    <AddComment post={post}/>
    <CommentsSubscription post={post}/>
  </div>
);
export default PostSubscription
