var cmd=require('node-cmd');
 
cmd.get(
    'arp -a',
    function(err, data, stderr){
        console.log('ARP Table ',data)
    }
  );
  
  
  