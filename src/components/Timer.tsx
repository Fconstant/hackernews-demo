import React from 'react';

type TimerState = {
    secondsPassed: number;
}

export class Timer extends React.PureComponent<{}, TimerState> {

    private interval!: NodeJS.Timer;

    readonly state = {
        secondsPassed: 0
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                secondsPassed: this.state.secondsPassed + 1
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <p>
                { `Seconds passed: ${this.state.secondsPassed}`}
            </p>
        )
    }

}