export class CreateUserDto {
  login: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'CUSTOMER' | 'COMPANY';
  description?: string
}


