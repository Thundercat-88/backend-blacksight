let {PythonShell} = require('python-shell');
const pyshell = new PythonShell('./pythonScripts/portscan.py');

//Load Network model
const Network = require('./Models/Network');



pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  
  console.log(message)
  const jsonObject = JSON.parse(message)
  const networkData = new Network ({
    host_name: jsonObject.host_name,
    host_ip: jsonObject.host_ip,
    mac: jsonObject.mac
  })
    networkData.save()
    .then(result => console.log(result))
});

// end the input stream and allow the process to exit
pyshell.end(function (err,code,signal) {
  if (err) throw err;
  console.log('The exit code was: ' + code);
  console.log('The exit signal was: ' + signal);
  console.log('finished');
});


