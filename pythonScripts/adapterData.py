import socket
import sys
from uuid import getnode as get_mac
import json

def get_data():
        try:
            host_name = socket.gethostname()
            host_ip = socket.gethostbyname(host_name)
            mac = get_mac()
            return (host_name, host_ip, mac)
        except:
            pass


host_name, host_ip, mac = get_data()

data = {
    'host_name': host_name,
    'host_ip': host_ip,
    'mac': mac
}

print(json.dumps(data))