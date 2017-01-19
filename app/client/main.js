// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import './main.html';

Template.Layout.helpers({
  items: function() {
    return [
      "Peanut Butter",
      "Strawberry Jam",
      "Nutella"
    ]
  }
})
