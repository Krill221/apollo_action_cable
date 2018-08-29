import React from "react";

const Post = ({ post }) => (
  <div>
    <div>{post.title}</div>
    <div>{post.body}</div>
  </div>
);
export default Post
