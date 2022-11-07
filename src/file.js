import * as json from 'json';
import * as jwt from 'jwt';
import * as time from 'time';
import * as hashlib from 'hashlib';
import * as requests from 'requests';
var ACCESS_KEY, ACCOUNT_ID, BASE_URL, CANONICAL_PATH, JWT_EXPIRE, RELATIVE_PATH, SECRET_KEY, cycle, headers, json_result, payload_token, raw_result, token;

function is_json(data) {
  try {
    json.loads(data);
  } catch (e) {
    if (e instanceof ValueError) {
      return false;
    } else {
      throw e;
    }
  }

  return true;
}

ACCOUNT_ID = "123456:1234abcd-1234-abcd-1234-1234abcd1234";
ACCESS_KEY = "amlyYTplN2UyNjFjNC02MTM4LTRiZWEtYWRiNy1lYmMyMjk0ZmZlMGUgYWRtaW4";
SECRET_KEY = "01wOEb-ZpIruI_QoAPSHirjBXsZRA3LDuLpnw0OHP-8";
JWT_EXPIRE = 3600;
BASE_URL = "http://localhost:9000";
RELATIVE_PATH = "/public/rest/api/1.0/cycle";
CANONICAL_PATH = "POST&" + RELATIVE_PATH + "&";
payload_token = {
  "sub": ACCOUNT_ID,
  "qsh": hashlib.sha256(CANONICAL_PATH.encode("utf-8")).hexdigest(),
  "iss": ACCESS_KEY,
  "exp": Number.parseInt(time.time()) + JWT_EXPIRE,
  "iat": Number.parseInt(time.time())
};
token = jwt.encode(payload_token, SECRET_KEY, {
  "algorithm": "HS256"
}).strip().decode("utf-8");
headers = {
  "Authorization": "JWT " + token,
  "Content-Type": "application/json",
  "zapiAccessKey": ACCESS_KEY
};
headers = {
  "Authorization": "JWT " + token,
  "Content-Type": "application/json",
  "zapiAccessKey": ACCESS_KEY
};
cycle = {
  "name": "Sample Cycle",
  "projectId": 10000,
  "versionId": -1
};
raw_result = requests.post(BASE_URL + RELATIVE_PATH, {
  "headers": headers,
  "json": cycle
});

if (is_json(raw_result.text)) {
  json_result = json.loads(raw_result.text);
  console.log(json.dumps(json_result, {
    "indent": 4,
    "sort_keys": true
  }));
} else {
  console.log(raw_result.text);
}
