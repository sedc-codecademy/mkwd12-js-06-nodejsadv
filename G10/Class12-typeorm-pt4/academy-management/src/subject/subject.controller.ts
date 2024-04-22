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
import { ApiQuery } from '@nestjs/swagger';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

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

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Subject> {
    return this.subjectService.findOne(+id);
  }

  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return this.subjectService.create(createSubjectDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    return this.subjectService.update(+id, updateSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.subjectService.remove(+id);
  }
}
