import socket
import subprocess
import sys
import re
from datetime import datetime

def get_data():
        try:
            host_ip = socket.gethostbyname(host_name)
            return (host_ip)
        except:
            pass

host_ip = get_data()

remoteServerIP  = host_ip
iPrange = host_ip
#re.search(r"\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}", remoteServerIP).group(0)

# Check what time the scan started
t1 = datetime.now()
def portScan():
    for iPrange in range(1,30):
        for port in range(1,200):  
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            result = sock.connect_ex((iPrange, port))
            sock.close()
            return (port, iPrange) 

iPrange, port, result = portScan()

data = {
    'iPrange': iPrange,
    'port': port,
    'result': result
}

print(json.dumps(data))