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
//menu handlers
  formclickHandler() {
    this.props.onFormClick();
  },
  homeclickHandler() {
    this.props.onHomeClick();
  },
  aboutclickHandler() {
    this.props.onAboutClick();
  },
  contactUsclickHandler() {
    this.props.onContactUsClick();
  },

  render() {

    return(
      <div>
        <div className="header">
          <h1>Form</h1>
          <ul className="menu">
            <li className="home"onClick={this.homeclickHandler}>Home</li>
            <li className="about"onClick={this.aboutclickHandler}>About</li>
            <li className="form"onClick={this.formclickHandler}>Add New</li>
            <li className="contactUs"onClick={this.contactUsclickHandler}>Contact Us</li>
          </ul>
        </div>   
        <div>
          <form onSubmit={this.submitHandler}>
          <input onChange={this.updateMessage} type="text" value={this.state.message}/>
          </form>
          <button onClick={this.cancelHandler}>Cancel</button>
        </div>
      </div>

    );

  }

});
