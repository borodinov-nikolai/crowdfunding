import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  login: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  role: 'ADMIN' | 'CUSTOMER' | 'COMPANY';
  @ApiProperty()
  isActivate?: boolean;
  @ApiProperty()
  banned?: boolean;
  @ApiProperty()
  createdAt?: Date;
  @ApiProperty()
  updatedAt?: Date;
}
