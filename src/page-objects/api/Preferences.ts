import { test, expect, APIRequestContext } from '@playwright/test'
import dotenv from 'dotenv'
require('dotenv').config()

export class Preferences {
  readonly reqContext: APIRequestContext
  readonly reqPut: any
  readonly reqResponse: any

  constructor (request: APIRequestContext) {

    this.reqContext = request

    this.reqPut = {
      "data": {
        "configDevices": [
          {
            "ipAddress": "*",
            "primaryDevices": [],
            "secondaryDevices": []
          },
          {
            "ipAddress": "10.10.153.254",
            "primaryDevices": [
              "araratsample2-1/boxpicker_1-op_station_1"
            ],
            "secondaryDevices": [
              "araratsample2-1/boxpicker_1",
              "araratsample2-1/boxpicker_1-op_station_2",
              "araratsample2-1/boxpicker_1-op_station_1-bay_1",
              "araratsample2-1/boxpicker_1-op_station_1-bay_2",
              "araratsample2-1/boxpicker_1-op_station_1-bay_3",
              "araratsample2-1/boxpicker_1-op_station_1-bay_4"
            ]
          }
        ],
        "created": "2023-01-26T20:44:35.951Z",
        "lastModified": "2023-01-26T20:44:35.951Z"
      }
    }

  }
  public async preferencePut (body: any, status: any){

    await test.step('Update Notification2 devices preference', async () => {

      const response = await this.reqContext.put('http://172.24.220.36:31597/api/preferences/data/SWISSLOG/SYSTEM?module=Notification2&name=Configuration', {
        'headers': {
          'accept': 'application/vnd.swisslog.common-preference.v1+json',
          'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3YThDbVUxaDM4RlpPdEdfbHF4dEtlTV9hMDZ6OTdRVGc2c19rTktRMjRnIn0.eyJleHAiOjE2MzkzMTk0MzMsImlhdCI6MTYzODQ1NTQzMywiYXV0aF90aW1lIjoxNjM4NDU1NDMzLCJqdGkiOiJmNmY2NTM3OC1lZjc5LTQxMDYtYjIzMC0yZmQyZmFmNmQyYjAiLCJpc3MiOiJodHRwczovL2l1aC1wZXJmLXNodmEudGhlZGV2Y2xvdWQubmV0L2F1dGgvcmVhbG1zL1N3aXNzbG9nIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImY6YzJmMjRmNGItZTM3ZC00M2E5LWI0M2EtMjNjNWFlZTM2ODU4OnN5c3RlbWFkbWluIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibWVkcG9ydGFsIiwibm9uY2UiOiI4ODgzN2I2OS0xMDg5LTQ2NmQtYTRkOS1mYzQ0ZDQyZTk0Y2QiLCJzZXNzaW9uX3N0YXRlIjoiYThhNWZjYjctYzBhNi00MzBkLWJkM2YtNDQ1NzQ2ZjIzYTM0IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJSZW1vdGVPcmRlcmluZ0FkbWluIiwiUmVtb3RlT3JkZXJpbmciLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiUGhhcm1hY3lNYW5hZ2VyIiwiU3dpc3Nsb2cgRVJQIFN1cHBvcnQiLCJQTVN5c3RlbUFkbWluIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6InRlc3QgZHVtbXkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzeXN0ZW1hZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJkdW1teSIsImVtYWlsIjoidGVzdEBkdW1teS5jb20ifQ.irOJlBMzbOhTuNhPVjepnqmnSfyaeD8_BOF0j6CsBY08I4r71GEJgQZmMocMrIsduw2SR2zuwq7FH_tsFe0Ufv2HHOSsFG8UvNOJ4Oh3hm3RFYcMXd22xOh-MTaObiaR19T-GFrubZfnYyqPHWQSkfQRv3uZjh8nDU1xrHY5PY3oampKDWkFE1BBG2jTgBd9S6OEn0LF8EzYeZQWnHbiC_GDmcXsNNhjoRJsFXZMkzXx6H6qdQovCYmdEV5dpb800_0bTKUJ8M-3v7L59jTnZpQ_ydWcdkh5fAo3GRg8SmmXDu6fwu1LNrZKydGpaWM_o_DXZa9uYAZIxyC0rgqyHg`,
          'Content-Type': 'application/json'
        },
        data: body,      
      })

      const statusResponse = response.status()
      const callResponse = response.body()

      expect(statusResponse,'Expected status').toBe(status)

  })
}
}