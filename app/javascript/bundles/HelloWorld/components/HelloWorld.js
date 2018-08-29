import React from 'react';
import {ApolloProvider} from 'react-apollo';

import AddPost from "./AddPost";
import PostsSubscription from "./PostsSubscription";

import {apollo_client} from "../apollo_client";


export default class HelloWorld extends React.Component {
  render() {
    return <ApolloProvider client={apollo_client}>
      <AddPost/>
      <PostsSubscription/>
    </ApolloProvider>
  }
}
