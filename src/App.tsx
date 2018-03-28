import React from 'react';

import { Timer } from 'components/Timer';
import { ExactTimer } from 'components/ExactTimer';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <p>Hello, World!</p>
                <br/>
                <Timer/>
                <ExactTimer/>
            </div>
        );
    }
}