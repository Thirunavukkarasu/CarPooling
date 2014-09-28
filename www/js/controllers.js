angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('OwnersCtrl', function($scope) {
  $scope.owners = [
    { name: 'Keshor', availability:'3', id: 1 },
    { name: 'Anjana', availability:'1', id: 2 },
    { name: 'Sathees', availability:'2', id: 3 },
    { name: 'Rekha', availability:'4', id: 4 },
    { name: 'Dinakaran', availability:'3', id: 5 },
    { name: 'Rajprabhu', availability:'2', id: 6 }
  ];
})

.controller('LocationsCtrl',function($scope){
  $scope.locations = [
  {name:'Madhya Kailash',id:1},
  {name:'Tidel Park',id:2},
  {name:'SRP Tools',id:3},
  {name:'Velachery',id:4},
  {name:'Narayanapuram',id:5},
  {name:'Medavakkam',id:6},
  {name:'Perumbakkam',id:7},
  {name:'Shozhlinganallur',id:8},
  {name:'Navallur',id:9},
  {name:'Siruseri IT Park',id:10},
  {name:'Guindy',id:11},
  {name:'Adyar',id:12},
  {name:'Vadapalani',id:13},
  {name:'CMBT',id:14}
  ];
  
   $scope.offices= [
  {name:'Thuraipakkam',id:1},
  {name:'Karapakkam',id:2},
  {name:'Shozhlinganallur',id:3},
  {name:'Siruseri',id:4}
  ];
})

.controller('OwnerCtrl', function($scope, $stateParams) {
});
