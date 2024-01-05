import { ApiProperty } from '@nestjs/swagger';

// signup dto
enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}
export class SignupDto {
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
  readonly contactNo: string;
  @ApiProperty()
  readonly gender: Gender;
  @ApiProperty()
  readonly secondaryEmail: string;
  @ApiProperty()
  readonly location: string;
  @ApiProperty()
  readonly about: string;
  @ApiProperty()
  readonly isActive: boolean;
}

export type registeredUser = {
  readonly name: string;
  readonly email: string;
};
