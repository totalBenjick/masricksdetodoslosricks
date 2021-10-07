import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch'
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
    fetch   
});

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link:  httpLink 
});

export default client;