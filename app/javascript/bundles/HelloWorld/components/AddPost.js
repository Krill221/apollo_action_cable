import React from "react";
import {Mutation} from 'react-apollo';
import {ADD_POST} from '../queries';

const AddPost = () => {
  let input_title;
  let input_body;

  return (
    <Mutation mutation={ADD_POST} >
      { (addPost) => (
        <div>
            <input ref={node => { input_title = node; }} />
            <input ref={node => { input_body = node; }} />
            <button onClick={ () => addPost({ variables: { title: input_title.value, body: input_body.value } }) } >
              Add Post
            </button>
        </div>
      )}
    </Mutation>
  );
};

export default AddPost
