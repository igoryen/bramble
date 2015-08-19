var myapp = angular.module('myapp', []);
myapp.controller('productController', function ($scope) {
  $scope.listProducts = [
    {id: 'p01', name: 'Product 1', price: 1000, quantity: 20},
    {id: 'p02', name: 'Product 2', price: 2000, quantity: 21},
    {id: 'p03', name: 'Product 3', price: 3000, quantity: 22},
    {id: 'p04', name: 'Product 4', price: 4000, quantity: 23},
  ];

  $scope.add = function () {
    $scope.listProducts.push({
      id: $scope.id, name: $scope.name, price: $scope.price, quantity: $scope.price
    });
    $scope.id = '';
    $scope.name = '';
    $scope.price = '';
    $scope.quantity = '';
  };

  /**
   * Update an item in list
   * @param {type} id
   * @returns {undefined}
   */
  $scope.selectEdit = function (id) {
    var index = getSelectedIndex(id);
    var product = $scope.listProducts[index];
    $scope.id = product.id;
    $scope.name = product.name;
    $scope.price = product.price;
    $scope.quantity = product.quantity;
  }

  /**
   * Delete an item from list
   * @param {type} id
   * @returns {undefined}
   */
  $scope.del = function (id) {
    var result = confirm('Are you sure?');

    if (result == true) {
      var index = getSelectedIndex(id);
      // delete index from the array
      $scope.listProducts.splice(index, 1);
    }


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