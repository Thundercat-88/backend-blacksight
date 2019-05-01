const cmd=require('node-cmd');
 
const processRef=cmd.get('python -i');
let data_line = '';
 
//listen to the python terminal output
processRef.stdout.on(
  'data',
  function(data) {
    data_line += data;
    if (data_line[data_line.length-1] == '\n') {
      console.log(data_line);
    }
  }
);
 
const pythonTerminalInput=`

import socket 
import sys
#get local ip
[ip for ip in socket.gethostbyname_ex(socket.gethostname())[2] if not ip.startswith('127.')][:1]
#send data back
`;
 
//show what we are doing
console.log(`>>>${pythonTerminalInput}`);
 
//send it to the open python terminal
processRef.stdin.write(pythonTerminalInput);
