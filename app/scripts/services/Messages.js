(function() {
  function Message($firebaseArray) {

    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    //queries for messages of roomID

    Message.getByRoomId = function(roomId){

      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    return Message;
  }

  angular
    .module('chat')
    .factory('Message',['$firebaseArray', Message]);
})();
