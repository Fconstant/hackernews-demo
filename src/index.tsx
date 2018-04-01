require('semantic-ui-css/semantic.css');

import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';

import App from './App';
import { createApolloClient } from '@app/graphql';

const apolloClient = createApolloClient();

class Setup extends React.Component {

    render() {
        return (
            <ApolloProvider client={apolloClient}>
                <App/>
            </ApolloProvider>
        );
    }

}

ReactDOM.render(
    <Setup/>,
    document.getElementById('root')
)