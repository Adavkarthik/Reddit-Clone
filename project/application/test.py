import requests
import json

url="http://127.0.0.1:8000/register"

data={
    "username":"kathi",
    "password":"1212",
    "password2":"1212",
    "email":"adavkarhtk@gmail.com"
}


response=requests.post(
    url,
    data=json.dumps(data),
    headers={"Content-Type": "application/json"}
)

result=response.json()

print(result)
