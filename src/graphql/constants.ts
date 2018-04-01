import { HttpLink } from 'apollo-link-http';

export const serverUrl = 'http://localhost:4000';
export const httpLink = new HttpLink({ uri: serverUrl });