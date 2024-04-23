import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import {
  ApiQuery,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @ApiOperation({
    summary:
      'Retrieves all students. Optionaly filters tre result by name and academy id. Provides pagination and sorting',
  })
  @ApiOkResponse({
    type: [Student],
    description: 'All students retrieved successfully',
  })
  @Get()
  @ApiQuery({
    name: 'name',
    required: false,
    type: String,
    description: 'Filter student by name',
  })
  @ApiQuery({
    name: 'academyId',
    required: false,
    type: Number,
    description: 'Filter student by academyId',
  })
  @ApiQuery({
    name: 'page',
    required: false,
  })
  @ApiQuery({
    name: 'sort',
    required: false,
  })
  findAll(
    @Query('name') name: string,
    @Query('academyId') academyId: number,
    @Query('page') page: number,
    @Query('sort') sort: string,
  ): Promise<Student[]> {
    // return this.studentService.findAll();
    return this.studentService.findAll(name, academyId, page, sort);
  }

  @ApiOperation({ summary: 'Retrieves student by id' })
  @ApiOkResponse({
    type: Student,
    description: 'Student retrieved successfully',
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Student> {
    return this.studentService.findOne(+id);
  }

  @ApiOperation({ summary: 'Creates a student' })
  @ApiCreatedResponse({
    type: Student,
    description: 'Student created successfully',
  })
  @Post()
  create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentService.create(createStudentDto);
  }

  @ApiOperation({ summary: 'Updates a student by id' })
  @ApiOkResponse({
    type: Student,
    description: 'Student updated successfully',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    return this.studentService.update(+id, updateStudentDto);
  }

  @ApiOperation({
    summary: 'Deletes a student by id',
  })
  @ApiOkResponse({
    description: 'Student deleted successfully',
  })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.studentService.remove(+id);
  }
}
