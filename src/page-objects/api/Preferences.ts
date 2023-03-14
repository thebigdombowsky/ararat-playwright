import { test, expect, APIRequestContext } from '@playwright/test'
require('dotenv').config({ multiline: true })

const prefHost = process.env.BASE_API_URL
const prefEndpoint = process.env.PREFERENCE_ENDPOINT
const prefPort = process.env.PREFERENCE_PORT
const endpoint = `${prefHost}${prefPort}${prefEndpoint}`
console.log(endpoint)

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
            "ipAddress": "10.10.153.167",
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

      const response = await this.reqContext.put(endpoint, {
        headers: {
          'accept': `${process.env.PREFERENCE_ACCEPT}`,
          'Authorization': `${process.env.AUTH_TOKEN}`,
          'Content-Type': `${process.env.CONTENT_TYPE}`
        },
        data: body,      
      })

      const statusResponse = response.status()
      const callResponse = response.body()

      expect(statusResponse,'Expected status').toBe(status)

  })
}
}