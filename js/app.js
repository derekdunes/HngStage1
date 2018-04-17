  //Initialize Firebase

  var config = {
    apiKey: "AIzaSyAgwSMOr5ltYDMWN5UwUAeUx61g3QTpBd0",
    authDomain: "nyscexit.firebaseapp.com",
    databaseURL: "https://nyscexit.firebaseio.com",
    projectId: "nyscexit",
    storageBucket: "nyscexit.appspot.com",
    messagingSenderId: "108325893967"
  };

  firebase.initializeApp(config);
  
  var firestore = firebase.firestore();
  var docRef = firestore.doc("samples/votes");

  var button = document.querySelector("#voteButton");
  var voteCount = document.querySelector("#voteView");
  window.userCount = 0;

  button.addEventListener("click",function(e){
    e.preventDefault();
    //increment vote count when button is clicked
    //store no of increments in the window variable
    //if the variable reaches 50 votes disable the button
    //and tell the user that he has exceeded his limit

    console.log("button clicked");
    if (window.userCount == 1) {
      var win = window.open('https://goo.gl/forms/FPlV7oD2JAX3qL7V2','_blank');
      win.focus;
    }

    if (window.userCount < 50) {
        if (!window.votesCount) {
          window.votesCount = 1;
        }else{
          window.votesCount = window.votesCount + 1;
        }

        var votes = window.votesCount;
        
        voteCount.innerHTML = votes + '<span class="text">votes</span>';
         
        docRef.set({
            NoOfVotes: votes
        }).then(function(){
            console.log("Status saved!");
        }).catch(function (error){
            console.log("Got an error: ", error);
        });  
    }
    window.userCount++;
  });
  
  window.onload = function(){
  //get the value from the firestore database
  docRef.get().then(function(data){
    
    if (data && data.exists){
      const votes = data.data();
      voteCount.innerHTML = votes.NoOfVotes + '<span class="text">votes</span>';
      window.votesCount  = votes.NoOfVotes;
    }

  }).catch(function(e){
    console.log("an error during get occured: ", e);
  });

  
  }

  getRealtimeUpdates = function(){
    docRef.onSnapshot(function(data){
      if (data && data.exists){
        const votes = data.data();
        voteCount.innerHTML = votes.NoOfVotes + '<span class="text">votes</span>';
        window.votesCount  = votes.NoOfVotes;
      }
    });
  }

  getRealtimeUpdates();