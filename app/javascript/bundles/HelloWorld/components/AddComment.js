import React from "react";
import {Mutation} from 'react-apollo';
import {ADD_COMMENT} from '../queries';

const AddComment = ({post}) => {
  let input_body;
  return (
    <Mutation mutation={ADD_COMMENT} >
      { (addComment) => (
        <form onSubmit={ e => {
                e.preventDefault();
                addComment({ variables: { postId: post.id, body: input_body.value } });
              }}
            >
            <input ref={node => { input_body = node; }} />
            <button type="submit">Add Comment</button>
        </form>
      )}
    </Mutation>
  );
};

export default AddComment
