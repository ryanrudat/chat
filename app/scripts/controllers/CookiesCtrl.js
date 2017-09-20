
(function () {
  function CookiesCtrl($uibModalInstance, $cookies) {
    var $ctrl = this;

    $ctrl.addNew = function() {
      console.log($ctrl.name);
      $cookies.put('blocChatCurrentUser', $ctrl.name)
      $uibModalInstance.close();

  }
};


  angular
  .module('chat')
  .controller('CookiesCtrl', ['$uibModalInstance', '$cookies', CookiesCtrl])
})();
