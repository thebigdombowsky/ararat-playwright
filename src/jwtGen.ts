import * as json from 'json';
import * as jwtsimple from 'jwt-simple';
import * as requests from 'requests';
var ACCESS_KEY, ACCOUNT_ID, BASE_URL, CANONICAL_PATH, JWT_EXPIRE, RELATIVE_PATH, SECRET_KEY, cycle, headers, json_result, payload_token, raw_result, token;

function is_json(data) {
  try {
    json.loads(data);
  } catch (e) {+
    if (e instanceof EvalError) {
      return false;
    } else {
      throw e;
    }
  }

  return true;
}

ACCOUNT_ID = "60b8f9878cf9190069880026";
ACCESS_KEY = "MzhhM2UyMzktZDliMi0zMDQwLWJiNTgtZmZhODcyMGFkMzgwIDYwYjhmOTg3OGNmOTE5MDA2OTg4MDAyNiBVU0VSX0RFRkFVTFRfTkFNRQ";
SECRET_KEY = "mDSQZJycc6IawV0z8pPUwZr95PRBLICi3eHLjlENUYM";
JWT_EXPIRE = 3600;
BASE_URL = "https://prod-api.zephyr4jiracloud.com/connect";
RELATIVE_PATH = "/public/rest/api/1.0/cycle";
CANONICAL_PATH = "POST&" + RELATIVE_PATH + "&";
payload_token = {
  "sub": ACCOUNT_ID,
  "iss": ACCESS_KEY,
  "exp": Date.now() + JWT_EXPIRE,
  "iat": Date.now()
};
token = jwtsimple.encode(payload_token, SECRET_KEY, "HS256");
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
