import React from 'react';


export default React.createClass({

  formclickHandler() {
    this.props.onFormClick();
  },
  homeclickHandler() {
    this.props.onHomeClick();
  },
  aboutclickHandler() {
    this.props.onAboutClick();
  },
  tripclickHandler() {
    this.props.onTripClick();
  },

  

  render() {
    return (
      <div className="header">
        <h1>The real deal</h1>
        <ul className="menu">
          <li className="home"onClick={this.homeclickHandler}>Home</li>
          <li className="about"onClick={this.aboutclickHandler}>About</li>
          <li className="form"onClick={this.formclickHandler}>Add New</li>
          <li className="trip"onClick={this.tripclickHandler}>Trip</li>
        </ul>
      </div>

      
    );
  }

});
