import React from 'react'
import Modal from 'react-modal'

//const OptionModal...stateless component, sehingga tidak perlu memanage state
//<Modal> ... komponent modal
//isOpen ... Modal akan muncul dalam kondisi props.selectedOption bernilai True/terisi
//onRequestClose ... 
//contentLabel...contentLabel
//<h3> s/d <button> adalah children
//<h3>...tampil sbg judul modal
//&&...jika props.selectedoption terpenuhi, maka akan ditampilkan itu juga
//<button>... 

const OptionModal = (props) => (
        <Modal 
        isOpen={!!props.selectedOption} 
        onRequestClose = {props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    
    ) 

export default OptionModal