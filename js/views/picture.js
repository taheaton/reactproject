import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  detailsClickHandler(id) {
    this.props.onDetailsClick(id);
  },

  addClickHandler() {
    this.props.onAddClick();
  },

  processPictures(data) {
    return (
      <div key={data.objectId} className="pic-container" onClick={() => this.detailsClickHandler(data.objectId)}>
        <ul>
          <li><img src={data.Url} className="main-pictures"/></li>
        </ul>
      </div>
    ); 
  }, 

  render() {
    return (
      <div> 
        <div>
          {this.props.pictures().map(this.processPictures)}
          <button onClick={this.addClickHandler}>Add</button>
        </div>
      </div>
    );
  }

});