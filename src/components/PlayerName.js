
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


class PlayerName extends Component {
    render() {
        return (
            <div>
                <div className={this.props.player_name !== '' ? 'static-modal hidden' : ' static-modal'}>
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Please insert your name: </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>  <input type="text" ref="player_name_ref" className="form-control" onKeyPress={(e) => this.props._handleKeyPress(e, this.refs.player_name_ref.value)} />
                            <span className="input-group-btn">
                            </span></Modal.Body>

                        <Modal.Footer>
                            <Button bsStyle="primary" onClick={() => this.props.insertPlayer(this.refs.player_name_ref.value)}>Submit!</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>

                {/*   <div class="row">
                    <div class="col-lg-6 align-middle">
                        <div class="input-group">
                            <input type="text" ref="player_name" className="form-control" placeholder="Insert your name..." />
                            <span class="input-group-btn">
                                <button class="btn btn-default" onClick={() => this.props.insertPlayer(this.refs.player_name.value)}>Submit!</button>
                            </span>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count,
        player_name: state.player_name,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        insertPlayer: (player_name) => {
            const action = { type: 'PLAYER NAME', player_name: player_name };
            if (player_name !== "") {
                dispatch(action);
            }
        },
        _handleKeyPress: (e, player_name) => {
            if (e.key === 'Enter') {
                const action = { type: 'PLAYER NAME', player_name: player_name };
                if (player_name !== "") {
                    dispatch(action);
                }
            }
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerName);