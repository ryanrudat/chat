(function(){
  function HomeCtrl(Room, Message, $uibModal, $cookies) {


    var home = this;

    home.rooms = Room.all;
    home.currentRoom = null;
    home.messages = null;
    home.newMessage = {};

    home.open = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal'
      });

      modalInstance.result.then(function (newRoom) {
        Room.add(newRoom)
      }, function () {
        // $log.info('Modal dismissed at: ' + new Date());
      });
    }
      //This will instantiate a new room when activeRoom is clicked
    home.activeRoom = function(room) {
      home.currentRoom = room;
      home.messages = Message.getByRoomId(room.$id);
      //console.log('messages', home.messages);
    }

    home.send = function() {
      home.newMessage.roomId = home.currentRoom.$id;
      home.newMessage.username = $cookies.get('blocChatCurrentUser');

      Message.send(home.newMessage);
    }

    return home;
  }

  angular
    .module('chat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
