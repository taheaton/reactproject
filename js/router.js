import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import HomeComponent from './views/home';
import FormComponent from './views/formplay';
import ContactUsComponent from './views/contactus';
import AboutComponent from './views/about';
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
      onHomeClick={() => this.goto('')}
      onContactUsClick={() => this.goto('contactUs')}
      onAboutClick={() => this.goto('about')}
      onFormClick={() => this.goto('form')}/>

      );
  },

  showContactUs() {
    this.render(
      <ContactUsComponent 
      onHomeClick={() => this.goto('')}
      onContactUsClick={() => this.goto('contactUs')}
      onAboutClick={() => this.goto('about')}
      onFormClick={() => this.goto('form')}/>

      );
  },

  showAbout() {
    this.render(
      <AboutComponent 
      onHomeClick={() => this.goto('')}
      onContactUsClick={() => this.goto('contactUs')}
      onAboutClick={() => this.goto('about')}
      onFormClick={() => this.goto('form')}/>

      );
  },

  showForm() {
    this.render(
      <FormComponent
      onHomeClick={() => this.goto('')}
      onContactUsClick={() => this.goto('contactUs')}
      onAboutClick={() => this.goto('about')}
      onFormClick={() => this.goto('form')}
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