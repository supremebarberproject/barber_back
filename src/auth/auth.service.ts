import { Injectable } from '@nestjs/common';
import { LoginUserDTO, RegisterUserDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {
  register(userData: RegisterUserDTO) {
    return userData;
  }

  login(userData: LoginUserDTO) {
    return userData;
  }
}
