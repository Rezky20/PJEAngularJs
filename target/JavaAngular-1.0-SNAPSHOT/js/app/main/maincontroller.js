/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('main-controller',['main-services']);
app.controller('MainController',['$scope','KalkulatorFactory',function($scope,KalkulatorFactory){
    $scope.title = "Belajar AngularJS";
    
    $scope.mahasiswa = {
        nim : "1711501120",
        nama : "Rezky Setiawan",
        mataKuliah : "Java Enterprise",
        tanggalLahir : new Date("1999",'11','22')
    };
    
    $scope.books = [
        {
            title   : "Belajar Bootstrap",
            author  : "Penulis 1",
            price   : 80000,
            pubdate : new Date("2017","08","16")
        },
        {
            title   : "Belajar AngularJs",
            author  : "Penulis 2",
            price   : 120000,
            pubdate : new Date("2017","12","16")
        },
        {
            title   : "Belajar Spring",
            author  : "Penulis 3",
            price   : 120000,
            pubdate : new Date("2010","12","12")
        },
        {
            title   : "Belajar JDBC Template",
            author  : "Penulis 4",
            price   : 100000,
            pubdate : new Date("2012","9","17")
        }
    ];
    
    $scope.viewAlert=function(index){
        var book = $scope.books[index];
        alert("Title: "+book.title+"\nAuthor : "+book.author+"\nPrice : "+book.price+"\nPub Date: "+book.pubdate);
    };
    
    $scope.submit = function (){
            alert($scope.nama);
    };
    
    $scope.kalkulator = "Kalkulator Factory";
    
    $scope.penambahan=function(){
        $scope.hasil = KalkulatorFactory.tambah($scope.angkaA,$scope.angkaB);
    };
    $scope.pengurangan=function(){
        $scope.hasil = KalkulatorFactory.kurang($scope.angkaA,$scope.angkaB);
    };
    $scope.perkalian=function(){
        $scope.hasil = KalkulatorFactory.kali($scope.angkaA,$scope.angkaB);
    };
    $scope.pembagian=function(){
        $scope.hasil = KalkulatorFactory.bagi($scope.angkaA,$scope.angkaB);
    };
}]);

