import React from 'react';

import './Modal.css';

const Modal = props => {

    const modalClickHandler = event => {
        if(event.target.className === 'modal') {
            props.modalCloseHandler(); 
        }
    }

    let errorMessage = (<p>Please enter a valid name and age (non-empty values)</p>);

    
    if(props.ageData < 0) {
        errorMessage = (<p>Please enter a valid age (> 0)</p>);
    }
    if(props.ageData > 0) {
        errorMessage = (<p>Please enter a valid name and age (non-empty values)</p>);
    }

    return (
        <div className="modal" onClick={modalClickHandler}>
            <div className="modal-box">
                <div className="modal-header">Invalid input</div>
                <div className="modal-body">
                    {errorMessage}
                    <button className="modal-button" onClick={props.modalCloseHandler}>Okay</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;