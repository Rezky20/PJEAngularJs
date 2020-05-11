/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app= angular.module('profile-controller',[]);
app.controller('HomeController',['$scope',function ($scope){
    $scope.title = "Home";
    $scope.message = "Selamat Datang di Java Enterprise Application";
}]);

app.controller('AboutController',['$scope',function ($scope){
    $scope.title = 'About';
    $scope.message = "Java Enterprise Application menggunakan teknologi sebagai berikut : ";
    $scope.technologies = ['Bootstrap','Angular JS','Spring','JDBC Templat','MyBatis','Maven'];
}]);
app.controller('ContactController',['$scope',function ($scope){
    $scope.title = "Contact";
    $scope.contacts = ['Rezky.setiawan85@gmail.com','1711501120@student.budiluhur.ac.id'];
}]);
app.controller('ParamInputController',['$scope','$location',function ($scope,$location){
        $scope.title = "Parameter";
        $scope.detail = function (name){
            $location.path("/profile/param/"+name);
        };    
}]);
app.controller('ParamOutputController',['$scope','$routeParams', function($scope,$routeParams){
        $scope.title = "Parameter";
        $scope.param = $routeParams.theparam;
}]);
app.controller('Biodata207225Controller',['$scope',function ($scope){
        
        $scope.title = "Biodata Anggota Kelompok 1";
        $scope.biodataAnggota = [
            {
                nama        : "Rezky Setiawan",
                nim         : "1711501120",
                email       : "Rezky.setiawan85@gmail.com",
                tglLahir    : new Date("1999","11","22")
            },
            {
                nama        : "Ravi Melan",
                nim         : "1711500072",
                email       : "1711500072@student.budiluhur.ac.id",
                tglLahir    : new Date("1999","01","01")
            },
            {
                nama        : "Alfan Almunawar",
                nim         : "1711501625",
                email       : "1711501625@student.budiluhur.ac.id",
                tglLahir    : new Date("1999","01","01")
            }
        ];
        $scope.biodataDetail = function(index){
          $scope.biodata = $scope.biodataAnggota[index];  
        };
        $scope.biodataClear = function(){
            delete $scope.biodata;
        }
}]);