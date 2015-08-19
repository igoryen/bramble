var myapp = angular.module('myapp', []);
myapp.controller('productController', function ($scope) {
  $scope.listProducts = [
    {id: 'p01', name: 'Product 1', price: 1000, quantity: 20},
    {id: 'p02', name: 'Product 2', price: 2000, quantity: 21},
    {id: 'p03', name: 'Product 3', price: 3000, quantity: 22},
    {id: 'p04', name: 'Product 4', price: 4000, quantity: 23},
  ];

  $scope.del = function (id) {
    var result = confirm('Are you sure?');

    if (result == true) {
      var index = getSelectedIndex(id);
      $scope.listProducts.splice(index, 1);
    }
    // delete index from the array

  };

  // get the index that was selected by id
  function getSelectedIndex(id) {
    for (var i = 0; i < $scope.listProducts.length; i++) {
      if ($scope.listProducts[i].id == id) {
        return i;
      }
    }
    return -1;
  }
});