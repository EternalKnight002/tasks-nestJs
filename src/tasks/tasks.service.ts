import { Injectable, NotFoundException } from '@nestjs/common';

export interface Task {
  id: number;
  title: string;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  getAll(): Task[] {
    return this.tasks;
  }

  getOne(id: number): Task {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  create(title: string): Task {
    const newTask: Task = { id: this.idCounter++, title };
    this.tasks.push(newTask);
    return newTask;
  }

  delete(id: number): Task {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) throw new NotFoundException('Task not found');
    const deleted = this.tasks[index];
    this.tasks.splice(index, 1);
    return deleted;
  }
}
