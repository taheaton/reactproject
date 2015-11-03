import React from 'react';
import ReactDom from 'react-dom';
//The 'about' pic can be changed by id on the router 119
export default React.createClass({

  render() {
    return (
      <div className="about-container">

        <div className="about-img">
          <img src={this.props.details.Url}/>  
        </div>

      <div className="about"> 
        <div className="about-container">
          <h3>Annie</h3><hr/>
          <h3>Tucker</h3><hr/>
          <h3>Heather</h3><hr/>
          <h3>Tommy</h3><hr/>
        </div>
      </div>
    </div>
    )
  } 

});