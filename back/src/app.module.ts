import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { jwtConfig } from 'configs/jwt.config';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    JwtModule.register(jwtConfig),
    DbModule,
    UsersModule,
    AuthModule,
    ProjectsModule
  ],
  controllers: [],
  exports: [],
})
export class AppModule {}
