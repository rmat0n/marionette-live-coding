define(['backbone.marionette', 'hbs!tmpl/item/TodoItemView_tmpl'],
  function(Marionette, TodoItemViewTmpl) {
    'use strict';
    return Marionette.ItemView.extend({
      className: 'item list-group-item',
      template: TodoItemViewTmpl,

      events: {
        'click': 'toggleDone'
      },

      initialize: function() {
        this.listenTo(this.model, 'change:done', this.updateClass);
      },

      onRender: function() {
        this.$el.toggleClass('done', this.model.get('done'));
      },

      toggleDone: function() {
        this.model.toggle().save();
      },

      updateClass: function() {
        this.$el.toggleClass('done');
      }
    });
  }
);
