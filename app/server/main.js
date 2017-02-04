// import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Items = new Mongo.Collection('items');
});
