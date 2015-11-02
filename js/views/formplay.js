import React from 'react';

// const SECRET_MESSAGE = 'TIY ROCKS!';

export default React.createClass({

  getInitialState() {
    return {
      message: ''
    };
  },

  updateMessage(event) {
    let newMessage = event.target.value;

    // let size = newMessage.length;

    // let secret = SECRET_MESSAGE.substring(0, size);

    this.setState({
      message: newMessage
    });
  },

  cancelHandler() {
    this.props.onCancelClick();
  },

  submitHandler(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.message);
  },

  render() {

    return(
         
        <div>
          <form onSubmit={this.submitHandler}>
          <input onChange={this.updateMessage} type="text" value={this.state.message}/>
          </form>
          <button onClick={this.cancelHandler}>Cancel</button>
        </div>
      

    );

  }
import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  backClickHandler() {
    this.props.onBackClick();
  },

  editClickHandler(id) {
    this.props.onEditClick(id);
  },

  getInitialState() {
    return {
      message: ''
    };
  },

  updateMessage(event) {
    let newMessage = event.target.value;

  this.setState({
      message: newMessage
    });
  },

  cancelHandler() {
    this.props.onCancelClick();
  },

  submitHandler(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.message);
  },  

  render() {
    return (
     // <div>
        //<div>
          //<h2>Details</h2> 
       //   <img src={this.props.pictures.Url}/>       
       //   <button key={this.props.details.objectId} className="edit-btn" onClick={() => this.editClickHandler(data.objectId)}>
         //   Edit
         // </button>
         // <button onClick={this.backClickHandler}>Back</button>
      //  </div>
        <div>
            <form onSubmit={this.submitHandler}>
            <input onChange={this.updateMessage} type="text" value={this.state.message}/>
            </form>
            <button onClick={this.cancelHandler}>Cancel</button>
        </div>
     // </div>
    );
  }
});
});
