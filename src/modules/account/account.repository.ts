import {
  // ConflictException,
  Injectable,
  // InternalServerErrorException,
} from '@nestjs/common';
// import { SignupRequestDto } from './account.dto';
import Prisma from 'prisma/client.prisma';
import { registeredUser } from './account.dto';
@Injectable()
export class AuthenticationRepository {
  async signup(signupRequestDto: any): Promise<registeredUser> {
    try {
      const user: registeredUser = await Prisma.account.create({
        data: signupRequestDto,
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  login(): string {
    return 'Hurrah! You are now logged in';
  }
}
