define(['backbone.marionette', 'jquery', 'hbs!tmpl/item/HeaderView_tmpl'],
	function(Marionette, $, HeaderviewTmpl) {
		'use strict';
		return Marionette.ItemView.extend({
			template: HeaderviewTmpl,

			ui: {
				$links: 'a[data-toggle="tab"]'
			},

			events: {
				'click @ui.$links': 'redirect'
			},

			onRender: function() {
				this.ui.$links.filter('[href="' + location.hash + '"]').tab('show');
			},

			redirect: function(e) {
				location.hash = $(e.target).attr('href').substr(1);
				console.log(location.hash);
			}
		});
	}
);
