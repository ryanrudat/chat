
(function() {
  function ModalCtrl(Room, $uibModalInstance) {
    // this.ok = function () {
    //   // add room
    //   Room.add(newRoomName);
    //   $uibModal.close(); <!--$uibModalInstance-->
    // };
    //
    // this.cancel = function () {
    //   $uibModal.dismiss('cancel');
    // };

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
