import { ConsoleLogger, Injectable } from '@nestjs/common';
import { blue, bold, underline, red, green } from "colorette"

@Injectable()
export class LoggerService extends ConsoleLogger {
  log(message: string) {
    super.log(green(message));
  }

  error(message: string) {
    super.error(red(message));
  }

  warn(message: string) {
    super.warn(blue(message));
  }

  debug(message: string) {
    super.debug(message);
  }

  verbose(message: string) {
    super.verbose(message);
  }
}
