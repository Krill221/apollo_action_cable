import React from 'react';
import ActionCable from 'actioncable';
import ActionCableLink from 'graphql-ruby-client/subscriptions/ActionCableLink';

import {HttpLink} from 'apollo-link-http';
import {split} from 'apollo-link';

import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

import {getMainDefinition} from 'apollo-utilities';
import {InMemoryCache} from 'apollo-cache-inmemory';

import PostEditorView from "./PostEditorView";
import PostsListingView from "./PostsListingView";



const cable = ActionCable.createConsumer(`ws://0.0.0.0:3000/subscriptions`);
let webSocketLink = new ActionCableLink({cable});
let httpLink = new HttpLink({uri: `http://0.0.0.0:3000/graphql`});


const link = split(
    ({query}) => {
        const {kind, operation} = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    webSocketLink,
    httpLink,
);


const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache({addTypename: false})
});


export default class HelloWorld extends React.Component {

  render() {
    return <ApolloProvider client={client}>
      <PostEditorView/>
      <PostsListingView/>
    </ApolloProvider>
  }
}
