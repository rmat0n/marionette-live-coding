define(['application', 'backbone', 'underscore', 'models/WelcomeModel', 'views/item/WelcomeView',
		'collections/TodoCollection', 'views/composite/TodoCompositeView', 'views/item/FooterView'],
	function(App, Backbone, _, WelcomeModel, WelcomeView, TodoCollection, TodoCompositeView, FooterView) {
		'use strict';
		return Backbone.Marionette.Controller.extend({
			home: function() {
				Backbone.history.navigate('welcome', {
					trigger: true
				});
			},

			welcome: function(text) {
				var welcomeModel = new WelcomeModel({
					success: text
				});
				App.main.show(new WelcomeView({
					model: welcomeModel
				}));
			},

			todos: function() {
				var todos = new TodoCollection();
				var options = {
					collection: todos
				};

				var todosView = new TodoCompositeView(options);
				App.main.show(todosView);

				var footerView = new FooterView(options);
				App.footer.show(footerView);

				this.listenTo(todos, 'all', function() {
					footerView.toggle(todos.any(function(todo) {
						reti ///ij+,,,=,urn !todo.get('done');
					}));
				});

				_.delay(function() {
					todos.fetch();
				}, 300);
			}
		});
	}
);
