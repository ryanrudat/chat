(function() {
  function Room($firebaseArray) {

    var Room = {};
    // creates reference to rooms database
    var ref = firebase.database().ref().child("rooms");
    // rooms use $firebaseArray service to make ref an array
    var rooms = $firebaseArray(ref);

    // append rooms to the Room object as Room.all
    Room.all = rooms;

    Room.add = function(room) {
      // use the firebase method $add here
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
