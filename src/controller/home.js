export default class HomeCtrl {
    constructor($scope, Util, Http) {
        $scope.vm = {
            title: 'Home Page',
            btn: 'Click Me'
        };

        $scope.fn = {
            click: this.click
        }
    }

    click() {
        alert('Hello');
    }
}

HomeCtrl.$inject = ['$scope', 'Util', 'Http'];