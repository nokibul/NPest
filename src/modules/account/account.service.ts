import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  constructor() {}
  // async signup(signupData: any): Promise<string> {}

  login(): string {
    return 'Hurrah! You are now logged in';
  }
}
