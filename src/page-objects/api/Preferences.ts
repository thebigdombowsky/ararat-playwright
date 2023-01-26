import { test, expect, request, APIRequestContext } from '@playwright/test'
import dotenv from 'dotenv'

export class Preferences {
  readonly reqContext: APIRequestContext
  readonly reqGet: any
  readonly reqPost: any
  readonly reqPut: any
  readonly reqResponse: any
  readonly reqError: any

  constructor (request: APIRequestContext) {

    this.reqContext = request
    this.reqPost = {
      
    }

    this.reqPut = {

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
      ]
    }

    this.reqGet = {

    }

  }
  public async preferencePut (body: any, returns: any, status: any){

    await test.step('Update a preference',async () => {

      const reqResponse = await this.reqContext.put(`${process.env.BASE_API_URL}api/preferences/data/`, {
        'headers': {
          'accept': `${process.env.PREFERENCE_ACCEPT}`,
          'Authorization': `${process.env.AUTH_TOKEN}`,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(this.reqPut),      
      })

      const statusResponse = reqResponse.status()
      const callResponse = reqResponse.json()
  })
}
}