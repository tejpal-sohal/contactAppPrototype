/* Unit tests */
'use strict';

describe('Conacts: personCtrl', function() {
    var $scope = null;
    var ctrl = null;
    // var API_URL = 'http://www.mocky.io/v2/58088826100000e9232b75b0';
    // var httpBackend, resource;

    //you need to indicate your module in a test
    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller, $injector) {
        $scope = $rootScope.$new();
        // httpBackend = $injector.get('$httpBackend');
       $controller('personCtrl', {$scope: $scope});
    }));

    it('The $scope.contacts should be defined and contain mock data', function () {
        $scope.contactObjs = {};
        expect($scope.contactObjs).toBeDefined();
        $scope.contactObjs = [
            {
                "name": "leanne graham",
                "email": "leanne@gmail.com",
                "job": "web developer",
                "location": "london",
                "tag": "friends",
                "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
            }
       ]
        expect($scope.contactObjs.length).toBeGreaterThan(0);

    });

    it('The save function should be add new data to contactObjs', function () {
        $scope.contactObjs = {};
        $scope.contactObjs = [
            {
                "name": "leanne graham",
                "email": "leanne@gmail.com",
                "job": "web developer",
                "location": "london",
                "tag": "friends",
                "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
            }
        ];

        $scope.newContact = [
            {
                "name": "ervin howell",
                "email": "ervin@gmail.com",
                "job": "tech lead",
                "location": "london",
                "tag": "friends",
                "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
            }
        ];

        $scope.contactObjs.push($scope.newContact);
        expect($scope.contactObjs.length).toEqual(2);

    });






});