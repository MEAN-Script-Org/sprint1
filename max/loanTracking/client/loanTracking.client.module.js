(function (app) {
  'use strict';

  app.registerModule('loanTracking');
  app.registerModule('loanTracking.services');
  app.registerModule('loanTracking.routes', ['ui.router', 'core.routes']);
}(ApplicationConfiguration));
