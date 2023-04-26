/*
 * @Description:
 * @Author: moumou.v1@foxmail.com
 * @Date: 2023-01-09 18:20:09
 * @LastEditTime: 2023-01-11 17:50:27
 * @LastEditors: moumou.v1@foxmail.com
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
