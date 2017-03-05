/* JS File for all Angular JS Code */

angular.module('myApp',[]).controller('myController',myController);

function myController(){
  var vm = this;
  vm.greeting = "Welcome to the text converter";
}
