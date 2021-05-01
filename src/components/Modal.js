import React from 'react';

import './Modal.css';

const Modal = () => {
    return (
        <div className="modal">
            <div className="modal-box">
                <div className="modal-header">Invalid input</div>
                <div className="modal-body">
                    <p>Please enter a valid name and age (non-empty values)</p>
                    <button className="modal-button">Okay</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;