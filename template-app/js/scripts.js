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