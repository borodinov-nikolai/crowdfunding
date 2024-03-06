import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { jwtConfig } from 'configs/jwt.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    JwtModule.register(jwtConfig),
    DbModule,
    UsersModule,
    AuthModule
  ],
  controllers: [],
  exports: [],
})
export class AppModule {}
