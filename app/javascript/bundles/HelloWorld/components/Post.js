import React, {Component} from "react";
import AddComment from './AddComment';
import CommentsSubscription from "./CommentsSubscription";


const Post = ({post}) => (
    <div>
      <div>
        Post: {post.title}
      </div>
      <div>
        <div>{post.body}</div>
        <AddComment post={post}/>
        <CommentsSubscription post={post}/>
      </div>
      <hr />
    </div>
)

export default Post;
