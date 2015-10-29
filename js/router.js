import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import HomeComponent from './views/home';
import FormComponent from './views/formplay';
import SpinnerComponent from './views/spinner';

export default Backbone.Router.extend({

  routes: {
    ""      : "showHome",
    "about" : "showAbout",
    "form"  : "showForm",
    "contactUs" : "showContactUs",
  },

  initialize(appElement) {
    this.el = appElement;
  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  start() {
    Backbone.history.start();
    return this;
  },

  showSpinner() {
    this.render(<SpinnerComponent/>);
  },

  showHome() {
    this.render(
      <HomeComponent 
      onFormClick={() => this.goto('form')}
      onHomeClick={() => this.goto('home')}/>
      );
  },

  showForm() {
    this.render(
      <FormComponent
        onCancelClick={() => this.goto('')}
        onSubmit={(msg) => this.saveForm(msg)}/>
    );
  },

  saveForm(message) {
    this.showSpinner();
    alert(`Simulating saving: ${message}`);
    this.goto('');
  }

});