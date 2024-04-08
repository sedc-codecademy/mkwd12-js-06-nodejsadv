import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

@Module({
  providers: [TasksService], // let's the tasks module know about the tasks service =)
  controllers: [TasksController],
})
export class TasksModule {}
