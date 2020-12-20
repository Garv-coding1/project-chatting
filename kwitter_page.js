
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

console.log(firebase_message_id);
console.log(message_data);
likes = message_data['likes'];
message = message_data['message'];
username = message_data['username'];
name_tag = "<h4>"+username+"<img src='Screenshot (10).png' id='iii'></h4>";
message_tag = "<h4 class='h4_msg'>"+message+"</h4>";
button_tag = "<button class='btn btn-success' value='"+likes+"' id='"+firebase_message_id+"' onclick='updateLikes(this.id)'>";
span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Likes : "+likes+"</span></button><hr>";
row = name_tag + message_tag + button_tag + span_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function updateLikes(message_id) {
      console.log("Like for message" + message_id);
      button_id = message_id;
      likes= document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            likes:updated_likes
      });
}

function logout() {
      localStorage.removeItem("roomname");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}
