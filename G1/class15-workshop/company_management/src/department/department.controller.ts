import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentCreateDto } from './dto/department-create.dto';
import { DepartmentUpdateDto } from './dto/department-update.dto';
import { DepartmentQueryDto } from './dto/department-query.dto';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { Department } from './department.entity';

@ApiTags('departments')
@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new department' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Department,
  })
  create(@Body() createDto: DepartmentCreateDto) {
    return this.departmentService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all departments' })
  @ApiOkResponse({ description: 'List of departments', type: [Department] })
  findAll(@Query() query: DepartmentQueryDto) {
    return this.departmentService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a department with all employees' })
  @ApiOkResponse({
    description: 'The department details with employees',
    type: Department,
  })
  findOne(@Param('id') id: string) {
    return this.departmentService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a department' })
  @ApiOkResponse({
    description: 'The updated department details',
    type: Department,
  })
  update(@Param('id') id: string, @Body() updateDto: DepartmentUpdateDto) {
    return this.departmentService.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a department' })
  @ApiOkResponse({ description: 'The department has been deleted' })
  remove(@Param('id') id: string) {
    return this.departmentService.remove(+id);
  }
}
