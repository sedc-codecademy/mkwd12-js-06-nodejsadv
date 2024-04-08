import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  // Injecting the TasksService under the property tasksService

  // tasksService = new TasksService()
  constructor(private readonly tasksService: TasksService) {}

  @Get() //localhost:3000/tasks
  getTasks() {
    const tasks = this.tasksService.getTasks();

    return tasks;
  }
}
