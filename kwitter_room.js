
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDtTJ3-uv-azHXqu1ZUEYts-aaoqVf6Dxg",
      authDomain: "lets-chat-d1713.firebaseapp.com",
      databaseURL: "https://lets-chat-d1713-default-rtdb.firebaseio.com",
      projectId: "lets-chat-d1713",
      storageBucket: "lets-chat-d1713.appspot.com",
      messagingSenderId: "473299529036",
      appId: "1:473299529036:web:a098fdc0df49d8b87533e9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").childKey(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    } 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      //End code

      });});}
getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      window.location = "index.html";  
}