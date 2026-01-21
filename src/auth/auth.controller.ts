import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('register_user')
  registerUser(data: any) {
    return 'x';
  }

  @MessagePattern('login_user')
  loginUser(data: any) {
    return 'x';
  }

  @MessagePattern('verify_user')
  verifyUser(data: any) {
    return 'x';
  }
}
