import React from 'react';

import { Link } from '@app/components';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <p>Hello, World!</p>
                <br/>
                <Link
                    uri="http://google.com"
                    description="Google website"
                />
            </div>
        );
    }
}