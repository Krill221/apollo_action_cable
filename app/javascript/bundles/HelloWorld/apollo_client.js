
import ActionCable from 'actioncable';
import ActionCableLink from 'graphql-ruby-client/subscriptions/ActionCableLink';

import {HttpLink} from 'apollo-link-http';
import {split} from 'apollo-link';

import {ApolloClient} from 'apollo-client';

import {getMainDefinition} from 'apollo-utilities';
import {InMemoryCache} from 'apollo-cache-inmemory';


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


export const apollo_client = new ApolloClient({
    link: link,
    cache: new InMemoryCache({addTypename: false})
});
