import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return registerDto;
  }
}
