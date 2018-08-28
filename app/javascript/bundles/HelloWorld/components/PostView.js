import React, {Component} from "react";
import CommentsListingView from "./CommentsListingView";


const PostView = ({post}) => (
    <div>
      <div>
        Post: {post.title}
      </div>
      <div>
        <div>{post.body}</div>
        <CommentsListingView post={post}/>
      </div>
      <hr />
    </div>
)

export default PostView;
