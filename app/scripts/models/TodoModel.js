define(['backbone'], function(Backbone) {
  'use strict';
  return Backbone.Model.extend({
    idAttribute: '_id',

    defaults: {
      name: 'Untitled',
      done: false
    },

    toggle: function() {
      return this.set('done', !this.get('done'));
    }
  });
});
