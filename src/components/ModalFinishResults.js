import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


class ModalFinishResults extends Component {
    render() {
        return (
            <div>
                <div className='static-modal'>
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Congradulations! your Result is: {this.props.result}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h1>Results</h1>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="primary" onClick={() => this.props.closeModal()}>ok, Close!</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        result: state.result,

    }
}
function mapDispatchToProps(dispatch) {
    return {
        closeModal: () => {
            const action = { type: 'INIT' };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalFinishResults);
