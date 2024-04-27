import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Task } from './entities/task.entity';

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOperation({ summary: 'Retrieves all tasks' })
  @ApiOkResponse({
    type: [Task],
    description: 'All tasks retrieved successfully',
  })
  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @ApiOperation({ summary: 'Retrieves task by id' })
  @ApiOkResponse({
    type: Task,
    description: 'Task retrieved successfully',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @ApiOperation({ summary: 'Creates a task' })
  @ApiCreatedResponse({
    type: Task,
    description: 'Task created successfully',
  })
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @ApiOperation({ summary: 'Updates a task by id' })
  @ApiOkResponse({
    type: Task,
    description: 'Task updated successfully',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @ApiOperation({ summary: 'Deletes a task by id' })
  @ApiOkResponse({
    description: 'Task deleted successfully',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
