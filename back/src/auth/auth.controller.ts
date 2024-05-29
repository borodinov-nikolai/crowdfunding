import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dtos/auth.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { Request, Response } from 'express';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  @ApiOperation({
    summary: 'регистрация нового пользователя',
  })
  @ApiResponse({
    status: 201,
    description: 'успешная регистрация нового пользователя',
    type: User,
  })
  signUp(
    @Body() body: SignUpDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<User> {
    return this.authService.signUp(body, res);
  }

  @Post('sign-in')
  @ApiOperation({
    summary: 'авторизация пользователя',
  })
  @ApiResponse({
    status: 200,
    description: 'авторизация прошла успешно',
    type: User,
  })
  signIn(
    @Body() body: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<User> {
    return this.authService.signIn(body, res);
  }

  @Post('sign-out')
  @ApiOperation({
    summary: 'выйти из аккаунта',
  })
  @ApiResponse({})
  signOut(@Res({ passthrough: true }) res: Response) {
    return this.authService.signOut(res);
  }

  @ApiOperation({
    summary: 'получить свои данные',
  })
  @ApiResponse({
    status: 200,
    type: User,
  })
  @UseGuards(RolesGuard)
  @Roles(['ADMIN', 'CUSTOMER', 'COMPANY'])
  @Get('me')
  getMe(@Req() req: Request): Promise<User> {
    return this.authService.getMe(req);
  }

  @Get('refresh')
  @ApiOperation({
    summary: 'Обновление токенов',
  })
  @ApiResponse({
    status: 201,
    description: 'успешное обновление токена',
    type: String,
  })
  refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.authService.refresh(req, res);
  }
}
