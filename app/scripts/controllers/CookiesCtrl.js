
(function () {
  function CookiesCtrl($uibModal, $cookies) {
    this.cancel = function() {
      uibModalInstance.dimiss('dismiss')
    }

    this.addNew = function(model) {
      $uibModalInstance.close(model);
  }
}


  angular
  .module('chat')
  .controller('CookiesCtrl', ['$uibModal', '$cookies', CookiesCtrl])
})();
