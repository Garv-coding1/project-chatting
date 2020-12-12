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
  document.getElementById("username").innerHTML = "Welcome " +user_name + "!";

  function addRoom() {
    roomname = document.getElementById("room_name").value;
    localStorage.setItem("roomname", roomname);
    firebase.database().ref("/").child(roomname).update({
      purpose : "adding room"
    });
    console.log(roomname);
    window.location = "kwitter_page.html";
  }

  function getData() {
    {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;

Room_names = childKey;
 //Start code
 console.log(Room_names);
 row = "<div class='room_name' id='" + Room_names +"'onclick='redirectToRoomPage(this.id)'>#" + Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}

  }

  getData();

  function redirectToRoomPage(name) {
    console.log(name);
    localStorage.setItem("name", name);
    window.location = "kwitter_page.html";
  }

