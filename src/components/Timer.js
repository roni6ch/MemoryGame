import React, { Component } from 'react';
import { connect } from 'react-redux';

class Timer extends Component {

    render() {
        return (
            <div>
                <p>Timer: {this.props.timer}</p>
            </div>
        );
    }
}

function formatTimer(totalSecondsPassed){

    let totalMinutesPassed = Math.floor(totalSecondsPassed/60),
    hours = Math.floor(totalMinutesPassed/60),
    minutes = totalMinutesPassed % 60,
    seconds = totalSecondsPassed % 60;

    return `${hours} hours ${minutes} minutes ${seconds} seconds`;
}
function mapStateToProps(state) {
    return {
        timer:formatTimer(state.timer)
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onClick: () => {

        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
