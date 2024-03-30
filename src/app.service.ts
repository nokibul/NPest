import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'newi           i hi sdf sadf dsdude i!';
  }
  sayCheese(): string {
    return 'Cheese!';
  }
}
