import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AcademyService } from './academy.service';
import { CreateAcademyDto } from './dto/create-academy.dto';
import { UpdateAcademyDto } from './dto/update-academy.dto';
import { Academy } from './entities/academy.entity';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
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

  @Post()
  create(@Body() createAcademyDto: CreateAcademyDto): Promise<Academy> {
    return this.academyService.create(createAcademyDto);
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
