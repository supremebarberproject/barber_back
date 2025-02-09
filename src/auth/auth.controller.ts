import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDTO, LoginUserDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() userData: RegisterUserDTO) {
    return this.authService.register(userData);
  }

  @Post('/login')
  login(@Body() userData: LoginUserDTO) {
    return this.authService.login(userData);
  }
}
