// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import './main.html';
Items = new Mongo.Collection('items');

Template.Layout.helpers({
  items: function() {
    return Items.find()
  }
})
