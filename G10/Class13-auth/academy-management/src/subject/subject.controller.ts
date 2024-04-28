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
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('subject')
@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @ApiOperation({
    summary:
      'Retrieves all subjects. Optionally filters the result by difficulty and academy id',
  })
  @ApiOkResponse({
    type: Subject,
    description: 'All subjects retrieved successfully',
  })
  @Get()
  @ApiQuery({
    name: 'difficulty',
    required: false,
  })
  @ApiQuery({
    name: 'academyId',
    required: false,
  })
  findAll(
    @Query('difficulty') difficulty: string,
    @Query('academyId') academyId: number,
  ): Promise<Subject[]> {
    return this.subjectService.findAll(difficulty, academyId);
  }

  @ApiOperation({ summary: 'Retrieves a student by id' })
  @ApiOkResponse({
    type: Subject,
    description: 'Subject retrieved successfully',
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Subject> {
    return this.subjectService.findOne(+id);
  }

  @ApiOperation({ summary: 'Creates a subject' })
  @ApiCreatedResponse({
    type: Subject,
    description: 'Subject created successfully',
  })
  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return this.subjectService.create(createSubjectDto);
  }

  @ApiOperation({ summary: 'Updates a student by id' })
  @ApiOkResponse({
    type: Subject,
    description: 'Updated a subject successfully',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    return this.subjectService.update(+id, updateSubjectDto);
  }

  @ApiOperation({ summary: 'Deletes a student by id' })
  @ApiOkResponse({
    description: 'Deleted a subject successfully',
  })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.subjectService.remove(+id);
  }
}
