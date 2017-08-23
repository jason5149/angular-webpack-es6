import angular from 'angular';
import uiRouter from 'angular-ui-router';

import route from './route';
import config from './config';
import Interceptor from './factory/interceptor';
import Http from './factory/http';
import Storage from './factory/storage';
import Util from './service/util';
import HomeCtrl from './controller/home';
import AboutCtrl from './controller/about';

const app = angular.module('App', [
    uiRouter
]);

app.config(config);
app.config(route);
app.factory('Interceptor', ['$q', '$injector', ($q, $injector) => new Interceptor($q, $injector)]);
app.factory('Http', ['$http', ($http) => new Http($http)]);
app.factory('Storage', () => new Storage());
app.service('Util', Util);
app.controller('HomeCtrl', HomeCtrl);
app.controller('AboutCtrl', AboutCtrl);

export default app;