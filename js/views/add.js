import React from 'react';

export default React.createClass({

  cancelClickHandler() {
    this.props.onCancelClick();
  },

  submitHandler(event) {
    event.preventDefault();
    this.props.onAddClick(this.state.Title, this.state.Url, this.state.About);
  },

  updateTitle(event) {
    let newTitle = event.currentTarget.value;

    this.setState({
      Title: newTitle
    });
  },

  updateUrl(event) {
    let newUrl = event.currentTarget.value;

    this.setState({
      Url: newUrl
    });
  },

  updateAbout(event) {
    let newAbout = event.currentTarget.value;

    this.setState({
      About: newAbout
    });
  },

  render() {
    return (
      <div className="add-container">

        <div className="add-header">
          <h2>Add an image</h2>
        </div>

        <div className="add-form">
          <form onSubmit={this.submitHandler}>
            <label className="add-label-url">Url: <input onChange={this.updateUrl} className="add-input-url" placeholder="Please provide the image url here  (i.e. 'www.mypicture.com')" type="url"/></label><br/><br/>
            <label className="add-label-title">Location: <input onChange={this.updateTitle} className="add-input-title" placeholder="Where was your picture taken?  (i.e. 'Paris, France')" type="text"/></label><br/><br/>
            <label className="add-label-about">About: <input onChange={this.updateAbout} className="add-input-about" placeholder="Please write a brief description about the picture and context" type="text"/></label><br/><br/>
          </form>
        </div>

        <div className="add-submit">
            <button className="add-submit-btn" onClick={this.submitHandler}>Submit</button>
        </div><br/>
        <div className="add-cancel">
          <button className="add-cancel-btn" onClick={this.cancelClickHandler}>Cancel</button>
        </div>
      </div>
    );
  }

});