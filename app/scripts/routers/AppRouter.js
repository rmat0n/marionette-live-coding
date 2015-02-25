define(['backbone.marionette'], function(Marionette) {
	'use strict';
	return Marionette.AppRouter.extend({
		appRoutes: {
			'': 'home',
			'welcome': 'welcome',
			'welcome/:text': 'welcome',
			'todos': 'todos'
		}
	});
});
