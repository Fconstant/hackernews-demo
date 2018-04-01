import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory'

import { httpLink } from './constants';

export function createApolloClient(){
    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    });
}