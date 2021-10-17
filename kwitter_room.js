
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDtIq29J1wqA-EwmuwcL3KWf_n5KAiYZ0w",
      authDomain: "kwitter-77cb7.firebaseapp.com",
      databaseURL: "https://kwitter-77cb7-default-rtdb.firebaseio.com",
      projectId: "kwitter-77cb7",
      storageBucket: "kwitter-77cb7.appspot.com",
      messagingSenderId: "69454326967",
      appId: "1:69454326967:web:bfc209dd0080893befb132"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("inputed_name").innerHTML = "hello " + username;
function addRoom(){
      roomname = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({purpose : "adding room name"});
      localStorage.setItem("roomname", roomname);
      window.location = "chatroom.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(firebase_message_id);
      console.log(message_data)
      name = message_data['message'];
      like = message_data['like']
      name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" +message + "</h4>";
      like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
      span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
      row= name_with_tag +message_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();
