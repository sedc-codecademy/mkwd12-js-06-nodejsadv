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
import { EmployeeService } from './employee.service';
import { EmployeeCreateDto } from './dto/employee-create.dto';
import { EmployeeUpdateDto } from './dto/employee-update.dto';
import { EmployeeQueryDto } from './dto/employee-query.dto';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { Employee } from './employee.entity';

@ApiTags('employees')
@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new employee' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Employee,
  })
  create(@Body() createDto: EmployeeCreateDto) {
    return this.employeeService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all employees' })
  @ApiOkResponse({ description: 'List of employees', type: [Employee] })
  findAll(@Query() query: EmployeeQueryDto) {
    console.log(query);
    return this.employeeService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an employee by id' })
  @ApiOkResponse({ description: 'The employee details', type: Employee })
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an employee' })
  @ApiOkResponse({
    description: 'The updated employee details',
    type: Employee,
  })
  update(@Param('id') id: string, @Body() updateDto: EmployeeUpdateDto) {
    return this.employeeService.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an employee' })
  @ApiOkResponse({ description: 'The employee has been deleted' })
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
