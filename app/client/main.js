// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import './main.html';
Items = new Mongo.Collection('items');

Template.Layout.helpers({
  items: function() {
    return Items.find()
  },
  formatTimestamp: function(timestamp) {
    var newTimestamp = moment(timestamp)
    return newTimestamp.calendar()
  }
})

Template.ItemAdd.events({
  'submit form': function(e, tmpl) {
    e.preventDefault()

    var form = tmpl.find('form');
    var itemEl = tmpl.find('[name=item]');
    var item = itemEl.value;

    Items.insert({
      item: item,
      timestamp: new Date
    });

    form.reset();
  }
})