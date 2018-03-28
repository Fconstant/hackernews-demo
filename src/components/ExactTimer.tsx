import React from 'react';

export class ExactTimer extends React.PureComponent {

    render() {
        return (
            <p>
                { `Time now: ${new Date().getSeconds()}`}
            </p>
        )
    }

}