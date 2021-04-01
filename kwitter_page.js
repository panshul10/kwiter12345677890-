var firebaseConfig = {
      apiKey: "AIzaSyAnA7N1EjMqfwy45Oh4UkMQVAD5mlgtJGk",
      authDomain: "twitter-dff12.firebaseapp.com",
      databaseURL: "https://twitter-dff12-default-rtdb.firebaseio.com",
      projectId: "twitter-dff12",
      storageBucket: "twitter-dff12.appspot.com",
      messagingSenderId: "830488176856",
      appId: "1:830488176856:web:1d25af3c25f26ddb61cfad",
      measurementId: "G-YETGW13PV1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
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
