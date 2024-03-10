import { ApiProperty } from '@nestjs/swagger';

// signup dto
export enum Gender {
  male = 'male',
  female = 'female',
  others = 'others',
}
export class AccountDTO {
  readonly name: string;
  @ApiProperty()
  readonly firstName: string;
  @ApiProperty()
  readonly lastName: string;
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly birthDate: Date;
  @ApiProperty()
  readonly password: string;
  @ApiProperty()
  readonly contactNo: string | null;
  @ApiProperty()
  readonly gender: Gender;
  @ApiProperty()
  readonly secondaryEmail?: string;
  @ApiProperty()
  readonly location?: string;
  @ApiProperty()
  readonly about?: string;
  @ApiProperty()
  readonly isActive?: boolean;
}

export class LoginDto {
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly password: string;
}

export type registeredUser = {
  readonly name: string;
  readonly email: string;
};
