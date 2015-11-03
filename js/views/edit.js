import React from 'react';

export default React.createClass({

  getInitialState() {
    return {
      location: this.props.record.location,
      url: this.props.record.Url,
      sum: this.props.record.sum,
    };
  }, 
  

  submitHandler(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.location, this.state.Url, this.state.sum);
  },

  updatelocation(event) {
    let newlocation = event.currentTarget.value;
    
    this.setState({
      location: newlocation
    });
  },

  updateUrl(event) {
    let newUrl = event.currentTarget.value;

    this.setState({
      Url: newUrl
    });
  },

  updatesum(event) {
    let newsum = event.currentTarget.value;

    this.setState({
      sum: newsum
    });
  },

  cancelClickHandler() {
    this.props.onCancelClick();
  },

  render() {
    return (
      <div className="edit-outer">
        <div className="edit-header">
          <h2>Edit</h2>
        </div>

        <div className="edit-form">
          <form onSubmit={this.submitHandler}>
            <label className="edit-label-location">Location: <input onChange={this.updatelocation} type="text" value={this.state.location} placeholder="Name your picture!"/></label>
            <label className="edit-label-url">Url: <input onChange={this.updateUrl} type="url" value={this.state.Url} placeholder="example.com/picture.png"/></label>
            <label className="edit-label-sum">About: <textarea onChange={this.updatesum} type="text" value={this.state.sum} placeholder="Tell us about this picture!"/></label>
          </form>
        </div>

        <div className="edit-submit">
          <button className="edit-submit-btn" onClick={this.submitHandler}>Submit</button>
        </div>
        <div className="edit-cancel">
          <button className="edit-cancel-btn" onClick={this.cancelClickHandler}>Cancel</button>
        </div>
      </div>
    );
  }
});