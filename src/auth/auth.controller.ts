import { Controller, Post, Body } from '@nestjs/common';

export interface BodyReq {
  firstName: "string",
  lastName: "string",
}

@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Body() req: Body): Promise<any> {
    return req
  }
}
