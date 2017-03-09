var ibrokermeApp = angular.module('ibrokermeApp', ['ngRoute', 'ngAnimate']);
 
// configure our routes
ibrokermeApp.config(function ($routeProvider, $locationProvider) {
   
    $routeProvider
    .when('/', {
        templateUrl: 'views/login.html',
        controller: 'indexController'
    })
    .when('/dashboard', {
        templateUrl: 'production/admin-template/idashboard.html',
        controller: 'indexController'
    }).otherwise({ redirectTo: '/' });
  $locationProvider.html5Mode({
       enabled: true,
       requireBase: false
    });
});
 
ibrokermeApp.run(run);

function run($rootScope, $location, $http) {
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        $location.path('/');
    });
}
ibrokermeApp.controller('indexController', function($scope) {
   alert("here");
});

ibrokermeApp.controller('advanced-datatablesController', function($scope) {
    debugger;
});

ibrokermeApp.controller('animationsController', function($scope) {
    
});

ibrokermeApp.controller('bs-carouselController', function($scope) {
    
});

ibrokermeApp.controller('buttonsController', function($scope) {
    
});

ibrokermeApp.controller('calendarController', function($scope) {
    
});

ibrokermeApp.controller('chart-boxesController', function($scope) {
    
});

ibrokermeApp.controller('chart-jsController', function($scope) {
    
});

ibrokermeApp.controller('chatController', function($scope) {
    
});

ibrokermeApp.controller('checklistController', function($scope) {
    
});

ibrokermeApp.controller('ckeditorController', function($scope) {
    
});

ibrokermeApp.controller('collapsableController', function($scope) {
    
});

ibrokermeApp.controller('content-boxesController', function($scope) {
    
});

ibrokermeApp.controller('data-tablesController', function($scope) {
    
});

ibrokermeApp.controller('dropzone-uploaderController', function($scope) {
    
});

ibrokermeApp.controller('fixed-datatablesController', function($scope) {
    
});

ibrokermeApp.controller('flot-chartsController', function($scope) {
    
});

ibrokermeApp.controller('forms-elementsController', function($scope) {
    
});

ibrokermeApp.controller('forms-masksController', function($scope) {
    
});

ibrokermeApp.controller('forms-validationController', function($scope) {
    
});

ibrokermeApp.controller('forms-wizardController', function($scope) {
    
});

ibrokermeApp.controller('gmapsController', function($scope) {
    
});

ibrokermeApp.controller('helper-classesController', function($scope) {
    
});

ibrokermeApp.controller('iconsController', function($scope) {
    
});

ibrokermeApp.controller('image-cropController', function($scope) {
    
});

ibrokermeApp.controller('imagesController', function($scope) {
    
});

ibrokermeApp.controller('indexController', function($scope) {
    
});

ibrokermeApp.controller('index-altController', function($scope) {
    
});

ibrokermeApp.controller('inline-editorController', function($scope) {
    
});

ibrokermeApp.controller('input-knobsController', function($scope) {
    
});

ibrokermeApp.controller('just-gageController', function($scope) {
    
});

ibrokermeApp.controller('labels-badgesController', function($scope) {
    
});

ibrokermeApp.controller('lazyloadController', function($scope) {
    
});

ibrokermeApp.controller('loading-feedbackController', function($scope) {
    
});

ibrokermeApp.controller('mailbox-composeController', function($scope) {
    
});

ibrokermeApp.controller('mailbox-inboxController', function($scope) {
    
});

ibrokermeApp.controller('mailbox-singleController', function($scope) {
    
});

ibrokermeApp.controller('mapaelController', function($scope) {
    
});

ibrokermeApp.controller('markdownController', function($scope) {
    
});

ibrokermeApp.controller('modalsController', function($scope) {
    
});

ibrokermeApp.controller('morris-chartsController', function($scope) {
    
});

ibrokermeApp.controller('multi-uploaderController', function($scope) {
    
});

ibrokermeApp.controller('nav-menusController', function($scope) {
    
});

ibrokermeApp.controller('notificationsController', function($scope) {
    
});

ibrokermeApp.controller('page-transitionsController', function($scope) {
    
});

ibrokermeApp.controller('panel-boxesController', function($scope) {
    
});

ibrokermeApp.controller('pickersController', function($scope) {
    
});

ibrokermeApp.controller('pie-gagesController', function($scope) {
    
});

ibrokermeApp.controller('popovers-tooltipsController', function($scope) {
    
});

ibrokermeApp.controller('progress-barsController', function($scope) {
    
});

ibrokermeApp.controller('response-messagesController', function($scope) {
    
});

ibrokermeApp.controller('responsive-datatablesController', function($scope) {
    
});

ibrokermeApp.controller('responsive-tablesController', function($scope) {
    
});

ibrokermeApp.controller('scrollbarsController', function($scope) {
    
});

ibrokermeApp.controller('slidersController', function($scope) {
    
});

ibrokermeApp.controller('social-boxesController', function($scope) {
    
});

ibrokermeApp.controller('sortable-elementsController', function($scope) {
    
});

ibrokermeApp.controller('sparklinesController', function($scope) {
    
});

ibrokermeApp.controller('summernoteController', function($scope) {
    
});

ibrokermeApp.controller('tablesController', function($scope) {
    
});

ibrokermeApp.controller('tabsController', function($scope) {
    
});

ibrokermeApp.controller('tile-boxesController', function($scope) {
    
});

ibrokermeApp.controller('timelineController', function($scope) {
    
});

ibrokermeApp.controller('vector-mapsController', function($scope) {
    
});

ibrokermeApp.controller('xchartsController', function($scope) {
    
});

ibrokermeApp.controller('admin-blogController', function($scope){

});

ibrokermeApp.controller('admin-pricingController', function($scope){

});

ibrokermeApp.controller('auto-menuController', function($scope){

});

ibrokermeApp.controller('faq-sectionController', function($scope){

});

ibrokermeApp.controller('invoiceController', function($scope){

});

ibrokermeApp.controller('portfolio-galleryController', function($scope){

});

ibrokermeApp.controller('portfolio-masonryController', function($scope){

});

ibrokermeApp.controller('slidebarsController', function($scope){

});

ibrokermeApp.controller('view-profileController', function($scope){

});

