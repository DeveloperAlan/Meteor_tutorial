// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import './main.html';

Template.Layout.helpers({
  items: function() {
    return [
      { item: "Peanut Butter"},
      { item: "Strawberry Jam"},
      { item: "Nutella"}
    ]


  }
})
