require(['backbone', 'application', 'routers/AppRouter', 'controllers/AppController'],
	function(Backbone, App, AppRouter, AppController) {
		'use strict';

		App.on('start', function() {
			new AppRouter({
				controller: new AppController()
			});
			Backbone.history.start();
			console.log('App started!');
		});

		App.start();
	}
);
