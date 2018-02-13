var app = angular.module('ovtutor', ['ui.router', 'ui.bootstrap', 'flash','login', 'dashboard']);
app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider, $modalInstance) {
    $stateProvider
        .state('app', {
            url: '/app',
            templateUrl: 'app/common/app.html',
            controller: 'appCtrl',
            controllerAs: 'vm',
            data: {
                pageTitle: 'Login'
            }
        });

    $urlRouterProvider.otherwise('login');
}]);

app.constant('appSettings', appConfig);
