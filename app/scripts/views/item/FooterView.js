define(['backbone.marionette', 'hbs!tmpl/item/FooterView_tmpl'], function(Marionette, FooterViewTmpl) {
	'use strict';
	return Marionette.ItemView.extend({
		className: 'footer',
		template: FooterViewTmpl,

		ui: {
			$count: '.count',
			$total: '.total'
		},

		initialize: function() {
			this.listenTo(this.collection, 'sync', this.show);
			this.listenTo(this.collection, 'all', this.updateCount);
		},

		onDestroy: function() {
			this.stopListening(this.collection, 'all', this.updateCount);
		},

		onRender: function() {
			this.toggle(false);
		},

		show: function() {
			this.toggle(true);
		},

		toggle: function(visible) {
			this.$el.toggle(visible);
		},

		updateCount: function() {
			this.ui.$count.html(this.collection.getActive().length);
			this.ui.$total.html(this.collection.length);
		}
	});
});
