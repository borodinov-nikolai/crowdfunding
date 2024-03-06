import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    default: 'example@gmail.com',
  })
  email: string;
  @IsNotEmpty()
  @Length(4, 8)
  @ApiProperty({
    default: '1234',
  })
  password: string;
  @ApiProperty()
  login: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  @IsNotEmpty()
  role: 'ADMIN' | 'CUSTOMER' | 'COMPANY';
}

export class SignInDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    default: 'example@gmail.com',
  })
  email: string;
  @IsNotEmpty()
  @Length(4, 8)
  @ApiProperty({
    default: '1234',
  })
  password: string;

}