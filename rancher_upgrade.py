import json
import requests
import sys

url = "https://rancher.mega.re/v3/projects/" + sys.argv[1] + "/workloads/"+ sys.argv[2]
auth_token = sys.argv[3]
headers = {"Authorization": "Bearer " + auth_token}

getResponse = requests.get(url, headers=headers)
output = json.loads(getResponse.content)
container = output["containers"]

jsonobject = {"containers": [{}]}
jsonobject["containers"] = container

print("Was: ${}".format(jsonobject["containers"][0]["image"]))
if jsonobject["containers"][0]["image"] == "kostecki/megapanel":
    jsonobject["containers"][0]["image"] = "kostecki/megapanel:latest"
else:
    jsonobject["containers"][0]["image"] = "kostecki/megapanel"
print("Is: ${}".format(jsonobject["containers"][0]["image"]))

contentType = {"content-type": "application/json"}
headers.update(**contentType)

putResponse = requests.put(url, data=json.dumps(jsonobject), headers=headers)
print(putResponse)