/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var services = angular.module('main-services',[]);

services.factory('KalkulatorFactory',function(){
    var kalkulator = {};
    kalkulator.tambah = function(angkaA,angkaB){
        return parseInt(angkaA)+parseInt(angkaB);
    };
    kalkulator.kurang = function(angkaA,angkaB){
        return parseInt(angkaA)-parseInt(angkaB);
    };
    kalkulator.kali = function(angkaA,angkaB){
        return parseInt(angkaA)*parseInt(angkaB);
    };
    kalkulator.bagi = function(angkaA,angkaB){
        return parseInt(angkaA)/parseInt(angkaB);
    };
    return kalkulator;
});