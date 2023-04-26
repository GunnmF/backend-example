/*
 * @Description:
 * @Author: moumou.v1@foxmail.com
 * @Date: 2023-01-11 17:52:11
 * @LastEditTime: 2023-01-13 18:47:40
 * @LastEditors: moumou.v1@foxmail.com
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
  Headers,
  HttpCode,
  Req,
  Res,
  Session,
  Version,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha';
@Controller({
  path: 'user',
  version: '1',
})
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('code')
  createCode(@Req() req, @Res() res, @Session() session) {
    const svg = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      background: '#cc9966',
    });
    session.code = svg.text;
    res.type('image/svg+xml');
    res.send(svg.data);
  }

  @Post('code')
  create(@Body('code') code, @Session() session) {
    console.log(code, session);
    if (code.toLowerCase() === session.code.toLowerCase()) {
      return {
        code: 200,
        msg: '校验成功',
      };
    } else {
      return {
        code: 400,
        msg: '校验失败',
      };
    }
  }

  @Get()
  @HttpCode(200)
  findAll(@Query() req) {
    // return this.userService.findAll();
    return { code: 200, msg: req };
  }

  @Get(':id')
  @Version('2')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
