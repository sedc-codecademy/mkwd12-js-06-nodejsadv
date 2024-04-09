import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosService } from './todos.service';
import { TasksModule } from './tasks/tasks.module';
import { OrdersModule } from './orders/orders.module';

// In NestJS, decorators are used to add functionality to classes and their members.
// A decorator is a function that can be attached to a class, method, property, or parameter.
// When a decorator is applied to a target, it modifies or enhances the target's behavior or metadata.

// @Module is decorator so we can define a module in NESTjs. A module is a collection of related classes
// that are grouped together for a specific purpose

// Each app has at least 1 module. The root module like this one.
// the root module is important  and is the starting point for nest to run our app.
// Small applications may have 1 module =)
// but biger, more complex application have lots of modules

// The @Module() decorator takes a single object whose properties describe the module:

// Imports:
// In a module, imports are used to import and use other modules in the application. This allows the module to use functionality provided by other modules that it needs to function properly.
// For example, a module might import the HttpModule to use HTTP functionality in its controllers.

// Controllers:
// Controllers are responsible for handling incoming requests and generating responses. They are the entry point for incoming requests and define the HTTP routes for the application.
// Controllers are defined as classes with methods that are decorated with HTTP request method decorators like @Get(), @Post(), @Put(), @Delete(), etc.
// These decorators define the HTTP method and route for the controller method to handle.

// Providers:
// Providers are classes that can be injected into other classes. They are responsible for providing functionality and services to other parts of the application.
// Providers can be used to connect to databases, external APIs, or perform other tasks required by the application. Providers can be injected into controllers, other providers, or other parts of the application.

// Exports:
// Exports are used to make components from a module available to other modules. When a component is exported from a module, it can be used by other modules that import the module.
// For example, if a module defines a controller that needs to be used by another module, the controller can be exported from the module and then imported by the other module.

@Module({
  imports: [TasksModule, OrdersModule], // classes that are decorated with @Module (registering other submodules in the main app.module)
  controllers: [AppController], // classes that are decorated with @Controller
  /**
   * HOW DI Work TodosService
   * 1. When module gets instantiated, the DI container creates instance of the AppController
   * 2. It will recognize that the app controller needs/requires instances of AppService & TodosService
   * 3. So creates instance of both and passes them to the controller
   *
   * It is a design pattern that simplifies the management of dependencies between components in app.
   * It allows the components to rely on the DI container to provide them the instances, without requiring to create on themselves.
   *
   * Nest will either create an instance of the Service and cache it and return it, or if one is already existing it will return the existing instance
   */
  providers: [AppService, TodosService], //  classes that are decorated with @Injectable
  exports: [],
})
export class AppModule {}
