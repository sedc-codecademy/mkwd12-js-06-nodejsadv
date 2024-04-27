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
  UseGuards,
} from '@nestjs/common';
import { AcademyService } from './academy.service';
import { CreateAcademyDto } from './dto/create-academy.dto';
import { UpdateAcademyDto } from './dto/update-academy.dto';
import { Academy } from './entities/academy.entity';
import { Response } from 'express';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/util/role.enum';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('academy')
@ApiBearerAuth()
@Controller('academy')
export class AcademyController {
  constructor(private readonly academyService: AcademyService) {}

  @ApiOperation({
    summary: 'Retrievs all academies',
  })
  @ApiOkResponse({
    type: [Academy],
    description: 'All academies retrieved successfully',
  })
  @Get()
  findAll(): Promise<Academy[]> {
    return this.academyService.findAll();
  }

  @ApiOperation({
    summary: 'Retrievs an academy by id',
  })
  @ApiOkResponse({
    type: Academy,
    description: 'Academy retrieved successfully',
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Academy> {
    return this.academyService.findOne(+id); // converts number-like string into number
  }

  @ApiOperation({
    summary: 'Retrieves an academy by name',
  })
  @ApiOkResponse({
    type: Academy,
    description: 'Academy by name retrieved successfully',
  })
  @Get('/name/:name')
  async getByName(@Param('name') name: string) {
    return await this.academyService.findByName(name);
  }

  @ApiOperation({
    summary: 'Retrieves an academy by id',
  })
  @ApiCreatedResponse({
    type: Academy,
    description: 'Academy retrieved successfully',
  })
  @Post()
  @Roles(Role.Admin)
  async create(@Body() createAcademyDto: CreateAcademyDto): Promise<Academy> {
    return await this.academyService.create(createAcademyDto);
  }

  @ApiOperation({
    summary: 'Updates an academy by id',
  })
  @ApiOkResponse({
    type: Academy,
    description: 'Academy updated successfully',
  })
  @Patch(':id')
  @Roles(Role.Admin)
  async update(
    @Param('id') id: string,
    @Body() updateAcademyDto: UpdateAcademyDto,
  ) {
    return await this.academyService.update(+id, updateAcademyDto);
  }

  @ApiOperation({
    summary: 'Deletes an academy by id',
  })
  @ApiOkResponse({
    type: Academy,
    description: 'Academy deleted successfully',
  })
  @Delete(':id')
  @Roles(Role.Admin)
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
