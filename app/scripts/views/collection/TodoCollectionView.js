define(['backbone.marionette', 'views/item/TodoView', 'views/item/EmptyTodoView'],
  function(Marionette, TodoItemView, EmptyTodoItemView) {
    'use strict';
    return Marionette.CollectionView.extend({
      childView: TodoItemView,
      emptyView: EmptyTodoItemView
    });
  }
);
