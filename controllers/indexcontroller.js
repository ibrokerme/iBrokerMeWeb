ibrokermeApp.controller('indexcontroller', function ($scope, $location, $window, authenticationfactory, userauthfactory, whoamiservice) {
    const token = $window.sessionStorage.token;
    const userid = $window.sessionStorage.getItem('userid');
    $scope.username = $window.sessionStorage.username;
    $scope.processlogout = function () {
        if (authenticationfactory.isLogged) {
            authenticationfactory.isLogged = false;
            delete authenticationfactory.user;
            delete $window.sessionStorage.token;
            delete $window.sessionStorage.user;
            $window.sessionStorage.removeItem("username");
            $window.sessionStorage.removeItem("userid");
            $window.sessionStorage.removeItem("email");
            $window.sessionStorage.removeItem("unlock");

            $location.path("#/");
        }
    }
    $scope.unlockscreen = function () {
        let password = $scope.unlockpassword;
        let email = $window.sessionStorage.getItem("email");
        userauthfactory.login(email, password).then(function (resp) {
            if (resp.status == '200') {
                $window.sessionStorage.setItem("unlock", true);
                $location.path('/dashboard');
            }
            else {
                $window.sessionStorage.setItem("unlock", false);
                $scope.message = "Password is wrong";
            }
        })
    }
    

});

