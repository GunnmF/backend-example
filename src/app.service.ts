/*
 * @Description:
 * @Author: moumou.v1@foxmail.com
 * @Date: 2023-03-29 16:09:19
 * @LastEditTime: 2023-04-25 21:48:27
 * @LastEditors: moumou.v1@foxmail.com
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
