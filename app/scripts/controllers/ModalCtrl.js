
(function() {
  function ModalCtrl(Room, $uibModalInstance) {


    this.buttonSubmit = function() {
      $uibModalInstance.close(this.newRoom);
    }

    this.close = function() {
      $uibModalInstance.dismiss('cancel');
    }


  };



  angular
  .module('chat')
  .controller('ModalCtrl',['Room', '$uibModalInstance', ModalCtrl]);
})();
