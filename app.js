path = 'http://localhost:3000';
var ibrokermeApp = angular.module('ibrokermeApp', ['ngRoute']);
ibrokermeApp.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('tokeninterceptor');
    $routeProvider
    .when("/", {
        templateUrl: "/views/login.html",
        controller: "indexcontroller",
    })
     .when("/registration", {
         templateUrl: "/views/registration.html",
         controller: "logincontroller",
     }).
     when("/dashboard", {
         templateUrl: "/views/idashboard.html",
         controller: "indexcontroller"
     }).otherwise({ redirectTo: '/' });

    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});


}]);
//ibrokermeApp.config(function ($routeProvider) {

//    $routeProvider
//      // route for the home page
//       .when("/", {
//           templateUrl: "/views/login.html",
//           controller: "indexcontroller",
//       }).
//      when("/dashboard", {
//          templateUrl: "/production/admin-template/idashboard.html",
//          controller: "indexcontroller"
//      }).otherwise({ redirectTo: '/' });
//});
//ibrokermeApp.run(function ($rootScope, $templateCache) {
//    $rootScope.$on('$viewContentLoaded', function () {
//        $templateCache.removeAll();
//    });
//});
////ibrokermeApp.run(run);
////run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
//function run($rootScope, $location, $cookieStore, $http) {
//    $rootScope.registration = { "pointer-events": "none", "cursor": "default" };
//    $rootScope.admin = { "pointer-events": "none", "cursor": "default" };
//    $rootScope.parent = { "pointer-events": "none", "cursor": "default" };
//    $rootScope.teacher = { "pointer-events": "none", "cursor": "default" };
//    $rootScope.student = { "pointer-events": "none", "cursor": "default" };
//    $rootScope.assessment = { "pointer-events": "none", "cursor": "default" };
//    var category = $cookieStore.get('category');
//    switch (category) {
//        case 'school':
//            $rootScope.registration = { "pointer-events": "", "cursor": "" };
//            break;
//        case 'admin':
//            $rootScope.registration = { "pointer-events": "", "cursor": "" };
//            $rootScope.admin = { "pointer-events": "", "cursor": "" };
//            $rootScope.parent = { "pointer-events": "", "cursor": "" };
//            $rootScope.teacher = { "pointer-events": "", "cursor": "" };
//            $rootScope.student = { "pointer-events": "", "cursor": "" };
//            $rootScope.assessment = { "pointer-events": "", "cursor": "" };
//            break;
//        case 'teacher':
//            $rootScope.teacher = { "pointer-events": "", "cursor": "" };
//            break;
//    }

//    // keep user logged in after page refresh
//    $rootScope.globals = $cookieStore.get('globals') || {};
//    if ($rootScope.globals.currentUser) {
//        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
//    }

//    $rootScope.$on('$locationChangeStart', function (event, next, current) {
//        // redirect to login page if not logged in and trying to access a restricted page
//        //  var restrictedPage = $.inArray($location.path(), ['/', '/register']) === -1;
//        debugger;
//        var loggedIn = $rootScope.globals.currentUser;
//        if (!loggedIn) {
//            $location.path('/');
//        }

//    });


//}
//ibrokermeApp.config(['$httpProvider', function ($httpProvider) {
//    //initialize get if not there
//    $httpProvider.defaults.cache = false;
//    if (!$httpProvider.defaults.headers.get) {
//        $httpProvider.defaults.headers.get = {};
//    }
//    $httpProvider.defaults.headers.common = {};
//    $httpProvider.defaults.headers.post = {};
//    $httpProvider.defaults.headers.put = {};
//    $httpProvider.defaults.headers.patch = {};
//    //disable IE ajax request caching
//    // $httpProvider.defaults.headers.get['Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
//    // $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
//    //// extra
//    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
//    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
//}]);

