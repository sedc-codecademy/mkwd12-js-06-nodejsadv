import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { AcademyService } from './academy.service';
import { CreateAcademyDto } from './dto/create-academy.dto';
import { UpdateAcademyDto } from './dto/update-academy.dto';
import { Academy } from './entities/academy.entity';
import { Response } from 'express';

@Controller('academy')
export class AcademyController {
  constructor(private readonly academyService: AcademyService) {}

  @Get()
  findAll(): Promise<Academy[]> {
    return this.academyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Academy> {
    return this.academyService.findOne(+id); // converts number-like string into number
  }

  @Get('/name/:name')
  async getByName(@Param('name') name: string) {
    return await this.academyService.findByName(name);
  }

  @Post()
  async create(@Body() createAcademyDto: CreateAcademyDto): Promise<Academy> {
    return await this.academyService.create(createAcademyDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAcademyDto: UpdateAcademyDto,
  ) {
    return await this.academyService.update(+id, updateAcademyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      await this.academyService.remove(+id);
      res.status(HttpStatus.OK).json({
        status: 'success',
        message: 'Academy successfully deleted',
      });
    } catch (error) {
      res.status(HttpStatus.NOT_FOUND).json({
        status: 'error',
        message: 'Failed to remove academy',
      });
    }
  }
}
