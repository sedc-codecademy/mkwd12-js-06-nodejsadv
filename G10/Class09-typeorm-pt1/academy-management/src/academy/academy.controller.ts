import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcademyService } from './academy.service';
import { CreateAcademyDto } from './dto/create-academy.dto';
import { UpdateAcademyDto } from './dto/update-academy.dto';

@Controller('academy')
export class AcademyController {
  constructor(private readonly academyService: AcademyService) {}

  @Post()
  create(@Body() createAcademyDto: CreateAcademyDto) {
    return this.academyService.create(createAcademyDto);
  }

  @Get()
  findAll() {
    return this.academyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcademyDto: UpdateAcademyDto) {
    return this.academyService.update(+id, updateAcademyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academyService.remove(+id);
  }
}
