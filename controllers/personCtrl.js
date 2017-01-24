//main logic for application

app.controller('personCtrl', ['$scope','$routeParams','mocky', function($scope,$routeParams,mocky) {
    mocky.then(function(data){
        $scope.contacts = data.data;
        contactObjs = data.data;
        for (i in contactObjs) {
            if($routeParams.name === contactObjs[i].name) {
                $scope.name = contactObjs[i].name;
                $scope.email = contactObjs[i].email;
                $scope.job = contactObjs[i].job;
                $scope.location = contactObjs[i].location;
                $scope.tag = contactObjs[i].tag;
                $scope.avatar = contactObjs[i].avatar;
            }
        }
        $scope.save = function() {
               newContact = {
                    "name":$scope.name,
                    "email":$scope.email,
                    "job":$scope.job,
                    "location":$scope.location,
                    "tag":$scope.tag,
                    "avatar":$scope.avatar
                };

                contactObjs.push(newContact);
                $scope.name = "";
                $scope.email= "";
                $scope.job = "";
                $scope.location= "";
                $scope.tag = "";
                $scope.avatar= "";

            }

    });


    $scope.toggle = function() {
        $scope.moreDetails = !$scope.moreDetails;
    };

}]);