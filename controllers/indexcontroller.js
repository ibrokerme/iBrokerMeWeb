ibrokermeApp.controller('indexcontroller', function ($scope, $location, $window, authenticationfactory) {
    const token = $window.sessionStorage.token;
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
        let pass = $scope.unlockpassword;
        let password = $window.sessionStorage.getItem("password");
        if (pass === password) {
            $window.sessionStorage.setItem("unlock", true);
            $location.path("/dashboard");
        }
        else {
            $window.sessionStorage.setItem("unlock", false);
            $scope.message = "Password is wrong";
        }
    }
});

