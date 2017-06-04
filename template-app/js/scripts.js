const remoteCmd = require('electron').remote;

  function miniApp(){
    var window = remoteCmd.getCurrentWindow();
    window.minimize();  
  }

  function closeApp(){
    var window = remoteCmd.getCurrentWindow();
    window.close();  
  }

  function maxiApp(){
    var window = remoteCmd.getCurrentWindow();
      window.maximize();
      document.getElementById("maxiApp").onclick=unmaxiApp;
  }

  function unmaxiApp(){
    var window = remoteCmd.getCurrentWindow();
    window.unmaximize();  
    document.getElementById("maxiApp").onclick=maxiApp;
  }

  function reloadApp(){
    var window = remoteCmd.getCurrentWindow();
    window.loadURL('file://' + __dirname + '/index.html'); 
    window.openDevTools();
  }

  var myAppId = '0b95c2712396d576671e61ca5d9b6c4449dcb46eb4e1c96456781e5e9ac84df6';
  var height = window.screen.height;
  var width = window.screen.width;
  var count = 10;
  var response;
  var request =require ('request');
  // request
  //     .get('https://api.unsplash.com/photos/random?client_id='+myAppId +'&count='+count+'&h='+height+'&w='+width)
  //     .on('response', function(response) {
  //       console.log(response.statusCode) // 200 
  //       console.log(response.headers['content-type']) 
        
  //       console.log(returnedJSON);
  //     })



//Request-Promise Commands and store

  var initiateUri, updateUri, newPageUri;
  initiateUri='https://api.unsplash.com/photos/random?client_id='+myAppId +'&count='+count+'&h='+height+'&w='+width;


  var rp = require('request-promise');
  var error; //-1 cant connect to host
  var options = {
    uri: initiateUri,
    qs: {
        client_id: myAppId // -> uri + '?access_token=xxxxx%20xxxxx' 
    },
    json: true // Automatically parses the JSON string in the response 
};
 
rp(options)
    .then(function (repos) {
        console.log('User has %d repos', repos.length);
        console.log(repos);
        response = repos;
    })
    .catch(function (err) {
        // API call failed... 
        error = -1;
        console.log('Could not connect to the host')
    });

//Start declaring and prototyping Vue JS

// setInterval(function(){
  // if(response===null){
      // console.log("Hi");
  // }else{
      // console.log(response[2]);
  // }
// },2000);
console.log("Calling for response started...");
setTimeout(function(){
  console.log("Recording response to response.");
  if(response!=undefined){
      error=1;//Response recieved
      console.log("Response recieved.");
      for(i=0;i<response.length;i++){
        console.log(response[i]);
        // document.getElementById("app").innerHTML+=response[i].urls.thumb+'<br>';
        document.getElementById("app").innerHTML+="<img src='"+response[i].urls.thumb+"' />"
      }
  }else{
    error = -1;//Response couldn't be recieved.
    console.log("Response havent been received yet.");
    document.getElementById("app").innerHTML="<div class='unableToLoad'><h1>ERROR(Reload)</h1></div> ";
  }
  
}, 1000); 