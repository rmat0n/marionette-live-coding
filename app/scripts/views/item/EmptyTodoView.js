define(['backbone.marionette', 'hbs!tmpl/item/EmptyTodoItemView_tmpl'],
  function(Marionette, EmptyTodoItemViewTmpl) {
    'use strict';
    return Marionette.ItemView.extend({
      template: EmptyTodoItemViewTmpl
    });
  }
);
