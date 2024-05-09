import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Trainer } from './entities/trainer.entity';

@ApiTags('trainer')
@Controller('trainer')
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {}

  @ApiOperation({
    summary:
      'Retrieves all trainers. Optionaly filters the result by name, academy id, and seniority',
  })
  @ApiOkResponse({
    type: [Trainer],
    description: 'Trainers retrieved successfully',
  })
  @Get()
  @ApiQuery({
    name: 'name',
    required: false,
  })
  @ApiQuery({
    name: 'academyId',
    required: false,
  })
  @ApiQuery({
    name: 'seniority',
    required: false,
  })
  findAll(
    @Query('name') name: string,
    @Query('academyId') academyId: number,
    @Query('seniority') seniority: string,
  ) {
    return this.trainerService.findAll(name, academyId, seniority);
  }

  @ApiOperation({ summary: 'Retrieves a trainer by id' })
  @ApiOkResponse({
    type: Trainer,
    description: 'Trainer retrieved successfully',
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.trainerService.findOne(id);
  }

  @ApiOperation({ summary: 'Creates a trainer' })
  @ApiCreatedResponse({
    type: Trainer,
    description: 'Trainer created successfully',
  })
  @Post()
  create(@Body() createTrainerDto: CreateTrainerDto) {
    return this.trainerService.create(createTrainerDto);
  }

  @ApiOperation({ summary: 'Updates a trainer by id' })
  @ApiOkResponse({
    type: Trainer,
    description: 'Updated a trainer successfully',
  })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTrainerDto: UpdateTrainerDto,
  ) {
    return this.trainerService.update(id, updateTrainerDto);
  }

  @ApiOperation({ summary: 'Deletes a trainer by id' })
  @ApiOkResponse({
    description: 'Trainer deleted successfully',
  })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.trainerService.remove(id);
  }
}
