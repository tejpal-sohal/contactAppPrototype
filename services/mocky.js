'use strict';
/* factory service takes in API Call
* $sce is a service that provides Strict Contextual Escaping services to AngularJS.
*
* */

app.factory('mocky', ['$http','$sce','$location', function($http,$sce,$location) {
    return $http.jsonp($sce.trustAsResourceUrl("http://www.mocky.io/v2/58088826100000e9232b75b0"), {jsonpCallbackParam: 'callback'})
        .then(function(data){
             return data
            },
            function(error) {
                switch (error.status){
                    case 404:
                        $location.url('/404');
                        break;
                    case 400:
                        $location.url('/404');
                        break;
                    case 402:
                        $location.url('/404');
                        break;
                    case 403:
                        $location.url('/404');
                        break;
                    case 408:
                        $location.url('/404');
                        break;
                }
            })
}]);
