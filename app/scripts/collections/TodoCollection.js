define(['backbone', 'models/TodoModel'], function(Backbone, TodoModel) {
  'use strict';
  return Backbone.Collection.extend({
    model: TodoModel,
    url: '/api/todos',

    isCompleted: function(todo) {
      return todo.get('done');
    },

    getActive: function() {
      return this.reject(this.isCompleted);
    },

    getCompleted: function() {
      return this.filter(this.isCompleted);
    }
  });
});
