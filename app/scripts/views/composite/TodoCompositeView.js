define(['backbone.marionette', 'underscore', 'jquery',
    'hbs!tmpl/composite/TodoCompositeView_tmpl',
    'views/item/TodoView', 'views/item/EmptyTodoView'
  ],
	function(Marionette, _, $, TodoCompositeViewTmpl, TodoView, EmptyTodoView) {
		'use strict';
		return Marionette.CompositeView.extend({
			template: TodoCompositeViewTmpl,
			childViewContainer: '.todo-container',
			childView: TodoView,
			emptyView: EmptyTodoView,

			ui: {
				$filter: '#filter-todo',
				$addInput: '#todo-name',
				$addButton: '#add-todo',
				$clearButton: '#clear-todo'
			},

			events: {
				'keyup @ui.$filter': 'filterDebounce',
				'click @ui.$addButton': 'addTodo',
				'click @ui.$clearButton': 'clearTodo'
			},

			filter: function(e) {
				var filter = $(e.currentTarget).val();
				this.collection.fetch({
					data: 'conditions={"name":{"$regex":"' + filter + '"}}'
				});
			},

			filterDebounce: _.debounce(function(event) {
				this.filter(event);
			}, 500),

			addTodo: function(e) {
				e.preventDefault();
				this.collection.create({
					name: this.ui.$addInput.val()
				}, {
					wait: true
				});
				this.ui.$addInput.val('');
			},

			clearTodo: function(e) {
				e.preventDefault();
				this.collection.getCompleted().forEach(function(todo) {
					todo.destroy();
				});
			}
		});
	}
);
