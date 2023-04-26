/*
 * @Description:
 * @Author: moumou.v1@foxmail.com
 * @Date: 2023-01-09 18:20:09
 * @LastEditTime: 2023-01-11 18:52:12
 * @LastEditors: moumou.v1@foxmail.com
 */
import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import * as session from 'express-session';
const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.use(
    session({
      secret: '签名',
      rolling: true,
      name: 'qm_sid',
      cookie: { maxAge: 99999999999 },
    }),
  );

  await app.listen(port);
  console.log('The service runs in the http://localhost:' + port);
}

bootstrap();
