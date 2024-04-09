import { Injectable } from '@nestjs/common';
import { Task } from 'src/interfaces/tasks.interface';

@Injectable() // allows us to inject this class in other services/classes(controllers)
// The @Injectable() decorator tells the dependency injection mechanism
// that this class is injectable, meaning it can be injected in controllers, other services etc.
export class TasksService {
  private tasks: Task[] = [
    { id: '1', title: 'Implement the header in the app' },
    { id: '2', title: 'Upgrade packages' },
  ];

  getTasks() {
    return this.tasks;
  }
}
