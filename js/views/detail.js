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
      <div>
        <div className="container">
          <h2>Details</h2> 
          <img src={this.props.details.Url}/> 
        
          <p>{this.props.details.location}</p><hr/>
          <p>{this.props.details.sum}</p>      
        </div>
        <button key={this.props.details.objectId} className="edit-btn" onClick={() => this.editClickHandler(data.objectId)}>
          Edit
          </button>
          <button onClick={this.backClickHandler}>Back</button>
      </div>  
    );
  }

});