(function () {
  'use strict';
  
  angular
    .module('loanTracking.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Users state routing
    $stateProvider
      .state('loanTracking', {
        url: '/tracking',
        templateUrl: '/modules/loanTracking/client/views/tracking.client.view.html',
        controller: 'LoanTrackingController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      }) ;
  }
}());
