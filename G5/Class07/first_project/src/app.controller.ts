import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TodosService } from './todos.service';

// DECORATOR (Controller)
@Controller()
export class AppController {
  // todosService = new TodosService();

  // DI => Dependency INJECTION
  constructor(
    private readonly appService: AppService,
    private readonly todosService: TodosService, // WE HAVE INJECTED OUR SERVICE =)
  ) {}

  // app.get('/')
  // localhost:3000 => default route
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // localhost:3000/hello
  @Get('/hello')
  sayHi() {
    return 'Hello my friends';
  }

  // app.get('/todos' ...)
  @Get('/todos') // the method below will be accessed on the http method GET and the endpoint specified in it
  // localhost:300/todos; METHOD = GET
  getTodos() {
    const todos = this.todosService.getTodos();

    return todos;
  }
}
