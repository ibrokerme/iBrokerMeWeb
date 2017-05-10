ibrokermeApp.controller('logincontroller', function ($scope, $location, loginservice) {
    debugger;
    $scope.processsignin = function () {
        $location.path('/dashboard');
    }
    $scope.addregistration = function () {
        debugger;
        let username = $scope.username;
        let email = $scope.email;
        let gender = $scope.gender;
        let dateofbirth = $scope.dateofbirth;
        let password = $scope.password;
        let confirmpassword = $scope.confirmpassword;
        let termsaccepted = $scope.termsaccepted;

        if (confirmpassword !== password) {
            $scope.message = "Password and confirmed password do not match"
        }
        else if (!termsaccepted) {
            $scope.message = "Please accept our terms and conditions to continue"
        }
        else {
            loginservice.addregistration(username, gender, email, dateofbirth, password, termsaccepted).then(function (response) {
                debugger;
            })
        }

    }
});

