import React from "react";
import {Mutation} from 'react-apollo';
import {UPDATE_POST} from '../queries';

const UpdatePost = ({post}) => {
  let input_title;
  let input_body;

  return (
    <Mutation mutation={UPDATE_POST} >
      { (updatePost) => (
        <div>
            <input ref={node => { input_title = node; }} />
            <input ref={node => { input_body = node; }} />
            <button onClick={ () => updatePost({ variables: { id: post.id,  title: input_title.value, body: input_body.value } }) } >
              Update Post
            </button>
        </div>
      )}
    </Mutation>
  );
};

export default UpdatePost
