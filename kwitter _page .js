//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAE7y1p_Mk7LYUzsECuapXdqHiK2nGNKVs",
    authDomain: "my-test-project-9c2b2.firebaseapp.com",
    databaseURL: "https://my-test-project-9c2b2.firebaseio.com",
    projectId: "my-test-project-9c2b2",
    storageBucket: "my-test-project-9c2b2.appspot.com",
    messagingSenderId: "986659015468",
    appId: "1:986659015468:web:87a2ad6d78898135697a89"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
name:user_name;
message:msg;
like:0
    });
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
