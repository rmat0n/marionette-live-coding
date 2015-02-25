require.config({

  baseUrl: "/scripts",

  /* starting point for application */
  deps: ['backbone.marionette', 'bootstrap', 'main'],

  shim: {
    'backbone.marionette': {
      deps: ['backbone'],
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    'bootstrap-navbar': {
      deps: ['jquery'],
      exports: 'jquery'
    }
  },

  paths: {
    jquery: '../y/jquery/jquery',
    backbone: '../y/backbone-amd/backbone',
    underscore: '../y/underscore-amd/underscore',

    /* alias all marionette libs */
    'backbone.marionette': '../y/backbone.marionette/lib/core/backbone.marionette',
    'backbone.wreqr': '../y/backbone.wreqr/lib/backbone.wreqr',
    'backbone.babysitter': '../y/backbone.babysitter/lib/backbone.babysitter',

    /* alias the bootstrap js lib */
    bootstrap: 'vendor/bootstrap',

    /* Alias text.js for template loading and shortcut the templates dir to tmpl */
    text: '../y/requirejs-text/text',
    tmpl: "../templates",

    /* handlebars from the require handlerbars plugin below */
    handlebars: '../y/require-handlebars-plugin/Handlebars',

    /* require handlebars plugin - Alex Sexton */
    i18nprecompile: '../y/require-handlebars-plugin/hbs/i18nprecompile',
    json2: '../y/require-handlebars-plugin/hbs/json2',
    hbs: '../y/require-handlebars-plugin/hbs'
  },

  hbs: {
    disableI18n: true
  }
});
