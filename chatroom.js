const firebaseConfig = {
    apiKey: "AIzaSyDtIq29J1wqA-EwmuwcL3KWf_n5KAiYZ0w",
    authDomain: "kwitter-77cb7.firebaseapp.com",
    databaseURL: "https://kwitter-77cb7-default-rtdb.firebaseio.com",
    projectId: "kwitter-77cb7",
    storageBucket: "kwitter-77cb7.appspot.com",
    messagingSenderId: "69454326967",
    appId: "1:69454326967:web:bfc209dd0080893befb132"
  };
  
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
roomname = localStorage.getItem("roomname");
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location = "index.html"
}