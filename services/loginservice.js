ibrokermeApp.service('loginservice', ['$http', function ($http) {
    var urluser = path + '/userregistration';
    debugger;
    this.addregistration = function (username, gender, email, dateofbirth, password, termsaccepted) {
        let reg = new FormData();  
        reg.append('username', username);
        reg.append('gender', gender);
        reg.append('email', email);
        reg.append('dateofbirth', dateofbirth);
        reg.append('password', password);
        reg.append('termsaccepted', termsaccepted);
        debugger;
        return $http.post(urluser, reg, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
         .then(function (response) {
             debugger;
             return response;
         });
         //.error(function (response) {
         //    debugger;
         //    return response;
         //});
    }
}]);
