import React, { Component } from 'react';
import { connect } from 'react-redux';


class Card extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.list.map((item, i) => (
                        /* <li key={i} className={item.active ? 'squere active' : 'squere'} onClick={()=>this.props.onCardClick(item)}><img src={item.name} />
                       </li> */
                        <li key={i} >
                            <div className="scene">
                                <div className={item.active || this.props.selectedObjId === item.id ? 'card is-flipped' : 'card'} onClick={() => this.props.onCardClick(item)}>
                                    <div className="card__face card__face--front"><div className="squere" /></div>
                                    <div className="card__face card__face--back"><img src={item.name} /></div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.list,
        selectedId: state.selectedId,
        selectedObjId: state.selectedObjId
    }
}
function mapDispatchToProps(dispatch) {
    return {
        RANDOM: () => {
            const action = { type: 'RANDOM' };
            dispatch(action);
        },
        onCardClick: (cardObj) => {
            let action = { type: 'CARD CLICK', cardObj: cardObj };
            dispatch(action);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
