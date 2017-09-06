(function(){
  function HomeCtrl(Room, $uibModal) {

    this.rooms = Room.all;

    this.open = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal'
      });

      modalInstance.result.then(function (newRoom) {
        Room.add(newRoom)
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    }

  }

  angular
    .module('chat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
