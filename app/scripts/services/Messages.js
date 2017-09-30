(function() {
  function Message($firebaseArray, $cookies) {


    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    //queries for messages of roomID

    Message.getByRoomId = function(roomId){

      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    Message.send = function(newMessage) {
      newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
      console.log(newMessage)
      messages.$add(newMessage);

      newMessage.message = "";
    }
    return Message;
  }



  angular
    .module('chat')
    .factory('Message',['$firebaseArray', '$cookies', Message]);
})();
