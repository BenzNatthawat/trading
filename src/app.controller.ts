import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as redis from 'redis';
const client = redis.createClient();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(): Promise<any> {
    client.setex('15', 60000, '{ "name": "Benz15" }');
    const dataRedis: string = await new Promise((resolve, reject) => {
      client.get('15', (err, value) => err ? reject(err) : resolve(value))
    })
    console.log(dataRedis)
    console.log(JSON.parse(dataRedis))
    return this.appService.getHello();
  }
}
