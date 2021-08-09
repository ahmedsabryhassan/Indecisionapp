import React from 'react';
import Modal from 'react-modal';

const optionModal = (props) =>(
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleDeleteSelectedOption}
    contentLabel="Selected Option"
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="modal"
    >
        <h1 className="modal__title" >Selected Option</h1>
        {props.selectedOption&&<p className="modal__body" >{props.selectedOption}</p>}
        <button className="button" onClick={props.handleDeleteSelectedOption}>okay</button>
    </Modal>
);


export default optionModal;