import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Timer from './Timer';
import PlayerName from './PlayerName';
import ModalFinishResults from './ModalFinishResults';


class Game extends Component {
    componentDidMount(){
        this.props.RANDOM();
      }

    render() {

        return (
            <div>
            <PlayerName />
                <p>Player Name: {this.props.player_name}</p>
                <p>Clicks: {this.props.count}</p>
                <Timer />
                <button onClick={this.props.RANDOM}>Shuffle Cards</button>

                 { this.props.finish ? <ModalFinishResults /> : null }

                <Card/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count,
        player_name: state.player_name,
        finish : state.finish
    }
}
function mapDispatchToProps(dispatch) {
    return {
        RANDOM: () => {
            const action = { type: 'RANDOM' };
            dispatch(action);
        },
        onCardClick: (cardId) =>{
            const action = { type: 'CARD CLICK' , cardId: cardId};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
