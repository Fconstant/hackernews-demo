import React from 'react';

import { Timer } from 'components/Timer';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <p>Hello, World!</p>
                <br/>
                <Timer/>
            </div>
        );
    }
}