define(['backbone.marionette', 'views/item/HeaderView'], function(Marionette, HeaderView) {
	'use strict';
	var App = new Marionette.Application();

	App.addRegions({
		header: '#header',
		main: '#main',
		footer: '#footer'
	});

	App.on('before:start', function() {
		App.header.show(new HeaderView());
	});

	return App;
});
