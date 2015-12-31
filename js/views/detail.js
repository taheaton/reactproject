import React from 'react';

export default React.createClass({

  backClickHandler() {
    this.props.onBackClick();
  },

  editClickHandler(id) {
    this.props.onEditClick(id);
  },

  changeClickHandler() {
    this.props.onDetailsClick
  },

  render() {
    return (
      <div className="detail-container">

        <div className="detail-img">
          <img src={this.props.details.Url}/>
          <img src={this.props.details.pic2}className="thumbnail"/>
        </div>   

        <div className="detail-about">
          <h2>{this.props.details.location}</h2>
          <p>{this.props.details.sum}</p><hr/>
        </div>

        <div className="detail-edit"> 
          <button className="detail-edit-btn" key={this.props.details.objectId} onClick={() => this.editClickHandler(this.props.details.objectId)}>
            Edit Picture
          </button><br/><br/>
        </div>

        <div className="detail-back">
          <button className="detail-back-btn" onClick={this.backClickHandler}>Home Page</button>
        </div>

        
      </div>
    );
  }

});