/*
 * @Description:
 * @Author: moumou.v1@foxmail.com
 * @Date: 2023-03-29 16:09:19
 * @LastEditTime: 2023-04-27 16:42:28
 * @LastEditors: moumou.v1@foxmail.com
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '这是服务端';
  }
}
