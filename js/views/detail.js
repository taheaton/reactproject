import React from 'react';

export default React.createClass({

  backClickHandler() {
    this.props.onBackClick();
  },

  editClickHandler(id) {
    this.props.onEditClick(id);
  },

  render() {
    return (
      <div className="detail-container">
        <div className="detail-header">
          <h2>{this.props.details.location}</h2> 
        </div>

        <div className="detail-img">
          <img src={this.props.details.Url}/>  
        </div>   

        <div className="detail-about">
          <h2>{this.props.details.location}</h2>
          <p>{this.props.details.sum}</p>
        </div>

        <div className="detail-edit"> 
          <button className="detail-edit-btn" key={this.props.details.objectId} onClick={() => this.editClickHandler(this.props.details.objectId)}>
            Edit Picture
          </button>
        </div>

        <div className="detail-back">
          <button className="detail-back-btn" onClick={this.backClickHandler}>Go Back</button>
        </div>
      </div>
    );
  }

});