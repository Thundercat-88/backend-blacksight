import socket 
#get local ip
print([ip for ip in socket.gethostbyname_ex(socket.gethostname())[2] if not ip.startswith('127.')][:1])
#send data back
print ip