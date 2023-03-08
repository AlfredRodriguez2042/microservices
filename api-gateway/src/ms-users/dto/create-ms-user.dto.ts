export class CreateMsUserDto {
  firstName: string;
  lastName: string;
  email: string;
  emailConfirmed: boolean;
  password: string;
  phoneNumber: number;
  phoneNumberConfirmed: boolean;
  profile: string;
  language: string;
  ipAddress: string;
  role: any;
}
