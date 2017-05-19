ibrokermeApp.controller('logincontroller', function ($scope, $rootScope, $location,
    $window, userauthfactory, authenticationfactory, loginservice) {

    //if (authenticationfactory.isLogged) {
    //    authenticationfactory.isLogged = false;
    //    delete authenticationfactory.user;
    //    delete authenticationfactory.userRole;

    //    delete $window.sessionStorage.token;
    //    delete $window.sessionStorage.user;
    //    delete $window.sessionStorage.userRole;

    //    authenticationservice.clearcredentials();
    //    $rootScope.loglabel = 'Sign In';
    //    $scope.isaboutlogin = false;
    //    $scope.isdefault = true;

    //   $location.path("#/");
    //}
    $scope.passwordrecovery = function () {
        let useremail = $scope.useremail;
        let username = $scope.username;
        debugger;
    }
    $scope.processsignin = function () {
        let email = $scope.useremail;
        let password = $scope.userpassword;

        if (email !== undefined && password !== undefined) {
            userauthfactory.login(email, password).then(function (resp) {
                if (resp.status == '200') {
                    authenticationfactory.isLogged = true;
                    authenticationfactory.user = resp.data.user;
                    $window.sessionStorage.token = resp.data.token;
                    $window.sessionStorage.user = resp.data.user;

                    $location.path('/dashboard');
                }
                else if (resp.status == '401') {
                    $scope.message = resp.statusText;
                }
            });
        } else {
            $scope.message = 'Invalid credentials';
        }
    };

    $scope.addregistration = function () {
        let username = $scope.username;
        let email = $scope.email;
        let gender = $scope.gender;
        let dateofbirth = $scope.dateofbirth;
        let password = $scope.password;
        let confirmpassword = $scope.confirmpassword;
        let termsaccepted = $scope.termsaccepted;
        let location = $location.absUrl().replace('registration','');
 
        if (confirmpassword !== password) {
            $scope.message = "Password and confirmed password do not match"
        }
        else if (!termsaccepted) {
            $scope.message = "Please accept our terms and conditions to continue"
        }
        else {
            $scope.message = "";
            loginservice.addregistration(username, gender, email, dateofbirth, password,location,termsaccepted).then(function (response) {  
                if (response.data.insertedCount > 0) {
                    $scope.message = "Email sent to you with link to login";
                }
                else if (response.data === 'Email already used') {
                    $scope.message = response.data;
                }
                else {
                    $scope.message = response.data;
                }

            })
        }

    }
});

