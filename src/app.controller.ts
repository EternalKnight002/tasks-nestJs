import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root() {
    return { message: 'Hello — Nest is running. Try GET /tasks' };
  }
}
