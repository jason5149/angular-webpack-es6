// import HomeCtrl from './controller/home';

const route = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './src/views/home.html',
            controller: 'HomeCtrl',
        })
        .state('about', {
            url: '/about',
            templateUrl: './src/views/about.html',
            controller: 'AboutCtrl',
        })
}

route.$inject = ['$stateProvider', '$urlRouterProvider'];

export default route;