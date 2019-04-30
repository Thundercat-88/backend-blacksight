let {PythonShell} = require('python-shell');
const pyshell = new PythonShell('./pythonScripts/portScan.py');

//Load Network model
//const Network = require('./Models/Network');

pyshell.on('message', function (message) {
    
  console.log(message)
  const jsonObject = JSON.parse(message)
  
    .then(result => console.log(jsonObject))
   
});

// end the input stream and allow the process to exit
pyshell.end(function (err,code,signal) {
  if (err) throw err;
  console.log('The exit code was: ' + code);
  console.log('The exit signal was: ' + signal);
  console.log('finished');
});




