(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(room) {
      //Use the firebase method $add here
      rooms.$add(room);
    }

    Room.remove = function(room) {
      rooms.$remove(room);
    }

    return Room;
  }


  angular
    .module('chat')
    .factory('Room', ['$firebaseArray', Room]);

})();
