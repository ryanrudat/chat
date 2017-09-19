
(function () {
  function CookiesCtrl(Room, $uibModalInstance, $cookies) {

    this.newUserName = function() {
      $cookies.put('blocChatCurrentUser', this.username)
      $uibModalInstance.close();
      console.log(this.username)
  }
};


  angular
  .module('chat')
  .controller('CookiesCtrl', ['Room', '$uibModalInstance', '$cookies', CookiesCtrl])
})();
