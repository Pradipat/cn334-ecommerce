import sys
import json
import requests

data = sys.stdin.read()
input_data = json.loads(data)
url = "https://api.aiforthai.in.th/ssense"
 
params = {'text':input_data}
 
headers = {
    'Apikey': "aa92miWKIYs3RnWitv1xnyHyTpvCmZUz"
    }
 
response = requests.get(url, headers=headers, params=params)

print(str(response.json()["sentiment"]["polarity-pos"]).lower())
