import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { TasksService, Task } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll(): Task[] {
    return this.tasksService.getAll();
  }

  @Post()
  create(@Body('title') title: string): Task {
    return this.tasksService.create(title);
  }

  @Get(':id')
  getOne(@Param('id') id: string): Task {
    return this.tasksService.getOne(Number(id));
  }

  @Delete(':id')
  delete(@Param('id') id: string): Task {
    return this.tasksService.delete(Number(id));
  }
}
