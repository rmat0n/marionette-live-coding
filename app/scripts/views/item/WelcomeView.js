define(['backbone.marionette', 'hbs!tmpl/item/WelcomeView_tmpl'],
	function(Marionette, WelcomeviewTmpl) {
		'use strict';
		return Marionette.ItemView.extend({
			template: WelcomeviewTmpl
		});
	}
);
