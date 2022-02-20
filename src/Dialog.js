import React, {Component} from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};   
 
class Dialog extends Component {
    constructor(props) {
      super(props);
        // var subtitle;
        this.state=({
            modalIsOpen: false,
            setIsOpen: false
          });  

    }
  openModal=()=> {
    this.setState({
        setIsOpen: true
    });
  }
 
  afterOpenModal=()=> {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
 
  closeModal=()=>{
    this.setState({
        setIsOpen: false
    });
  }
  render(){
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
}}

export default Dialog;