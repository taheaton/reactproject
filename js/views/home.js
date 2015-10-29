import React from 'react';

export default React.createClass({

  formclickHandler() {
    this.props.onFormClick();
  },
  homeclickHandler() {
    this.props.onHomeClick();
  },
  formclickHandler() {
    this.props.onFormClick();
  },
  homeclickHandler() {
    this.props.onHomeClick();
  },

  render() {
    return (
      <div className="header">
        <h1>H</h1>
        <ul className="menu">
          <li className="home"onClick={this.homeclickHandler}>Home</li>
          <li className="about"onClick={this.clickHandler}>About</li>
          <li className="form"onClick={this.formclickHandler}>Add New</li>
          <li className="contactUs"onClick={this.clickHandler}>Contact Us</li>
        </ul>
      </div>        
      
    );
  }

});
