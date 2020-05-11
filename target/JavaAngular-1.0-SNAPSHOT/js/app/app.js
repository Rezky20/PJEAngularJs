/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('je', ['ngRoute', 'main-controller', 'profile-controller']);


app.config(function ($routeProvider) {
    $routeProvider
            .when("/profile", {
                templateUrl: "template/profile/home.html",
                controller: "HomeController"
            })
            .when("/profile/about", {
                templateUrl: "template/profile/about.html",
                controller: "AboutController"
            })
            .when("/profile/contact", {
                templateUrl: "template/profile/contact.html",
                controller: "ContactController"
            })
            .when("/profile/param", {
                templateUrl: "template/profile/param_input.html",
                controller: "ParamInputController"
            })
            .when("/profile/param/:theparam", {
                templateUrl: "template/profile/param_output.html",
                controller: "ParamOutputController"
            })
            .when("/profile/biodata207225", {
                templateUrl: "template/profile/biodata207225.html",
                controller: "Biodata207225Controller"
            })
            ;
            
});
app.filter('trusted',['$sce',function ($sce){
        return function (url){
            return $sce.trustAsResourceUrl(url);
        };
}]);