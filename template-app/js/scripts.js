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
  var returnedJSON;
  var request =require ('request');
  // request
  //     .get('https://api.unsplash.com/photos/random?client_id='+myAppId +'&count='+count+'&h='+height+'&w='+width)
  //     .on('response', function(response) {
  //       console.log(response.statusCode) // 200 
  //       console.log(response.headers['content-type']) 
        
  //       console.log(returnedJSON);
  //     })

  var rp = require('request-promise');
  var options = {
    uri: 'https://api.unsplash.com/photos/random?client_id='+myAppId +'&count='+count+'&h='+height+'&w='+width,
    qs: {
        client_id: myAppId // -> uri + '?access_token=xxxxx%20xxxxx' 
    },
    json: true // Automatically parses the JSON string in the response 
};
 
rp(options)
    .then(function (repos) {
        console.log('User has %d repos', repos.length);
        console.log(repos);
    })
    .catch(function (err) {
        // API call failed... 
        console.log('Could not connect to the host')
    });