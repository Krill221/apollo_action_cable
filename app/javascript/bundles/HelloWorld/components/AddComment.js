import React from "react";
import {Mutation} from 'react-apollo';
import {ADD_COMMENT} from '../queries';

const AddComment = ({post}) => {
  let input_body;
  
  return (
    <Mutation mutation={ADD_COMMENT} >
      { (addComment) => (
        <div>
          <input ref={node => { input_body = node; }} />
          <button onClick={ ()=> addComment({ variables: { postId: post.id, body: input_body.value } }) }>
              Add Comment
          </button>
        </div>
      )}
    </Mutation>
  );
};

export default AddComment
