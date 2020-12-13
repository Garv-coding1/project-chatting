
var firebaseConfig = {
      apiKey: "AIzaSyDHOYFWhBYi9aYHrRIJzE_kWpfEpc2XnEs",
      authDomain: "letschat-e8bc0.firebaseapp.com",
      databaseURL: "https://letschat-e8bc0-default-rtdb.firebaseio.com",
      projectId: "letschat-e8bc0",
      storageBucket: "letschat-e8bc0.appspot.com",
      messagingSenderId: "28096779797",
      appId: "1:28096779797:web:6bf10ee71fadc1c433a01c",
      measurementId: "G-HXMC2S25CB"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("roomname");

    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                likes:0,
                message: msg,
                username : user_name
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();
